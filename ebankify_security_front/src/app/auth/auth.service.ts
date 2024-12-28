import { HttpClient, HttpContext } from '@angular/common/http';
import { DestroyRef, Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { User } from './interfaces/user';
import { Login, LoginResponse, LoginSuccess } from './interfaces/login';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IS_PUBLIC } from './auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly LOCALHOST = "http://localhost:8081";
  private readonly CONTEXT = {context: new HttpContext().set(IS_PUBLIC, true)};
  private readonly TOKEN_EXPIRY_THRESHOLD_MINUTES = 5;

  constructor(private readonly http: HttpClient, 
    private readonly router: Router, 
    private readonly jwtHelper: JwtHelperService, 
    private readonly destroyRef: DestroyRef) { }

  get user(): WritableSignal<User | null> {
    const token = localStorage.getItem('token');
    return signal(token ? this.jwtHelper.decodeToken(token) : null);
  }

  register(data: any): Observable<any> {
    
    return this.http.post<LoginResponse>(AuthService.LOCALHOST+"/auth/register", data)
    .pipe(
      catchError(error => {
        if (error.status === 409) {
          console.log("Email already in use");
        }
        return EMPTY;
      }), 
      tap(() => {
        this.router.navigate(['/login']);
      })
    );
  }

  login (data: Login): Observable<any> {
    return this.http.post(AuthService.LOCALHOST+"/auth/login", data, this.CONTEXT)
      .pipe(
        catchError(error => {
        if (error.status === 401) {
          console.error('Invalid credentials');
        }
        return EMPTY;
      }),
      tap(data => {
        const loginSuccessData = data as LoginSuccess;
        console.log(loginSuccessData);
        this.stockTokens(loginSuccessData);
        this.router.navigate(['/']);
      })
    )
  }

  logout(): void {
    const refresh_token = localStorage.getItem('refresh_token');
    if (refresh_token) {
      localStorage.removeItem('token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('expiration_date');
    }
    this.router.navigate(['/auth/login']);
  }

  stockTokens (data: LoginSuccess): void {
    localStorage.setItem('token', data.token);
    localStorage.setItem('refresh_token', data.refreshToken);
    localStorage.setItem('expiration_date', data.expirationDate);
  }

  refreshToken(): Observable<LoginResponse | null> {
    const refresh_token = localStorage.getItem('refresh_token');
    if (!refresh_token) {
      return EMPTY;
    }

    return this.http.post<LoginResponse>(
      AuthService.LOCALHOST+"/token/refresh", {refresh_token}, this.CONTEXT)
      .pipe(
        catchError(() => EMPTY),
        tap(data => {
          const loginSuccessData = data as LoginSuccess;
          this.stockTokens(loginSuccessData);
          this.scheduleTokenRefresh(loginSuccessData.token);
        })
      );
  }

  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired();
  }

  scheduleTokenRefresh(token: string): void {
    const expirationTime = this.jwtHelper.getTokenExpirationDate(token)?.getTime();
    const refreshTime = expirationTime ? expirationTime - this.TOKEN_EXPIRY_THRESHOLD_MINUTES * 60 * 1000 : Date.now();
    const refreshInterval = refreshTime - Date.now();

    if (refreshInterval > 0) {
      setTimeout(() => {
        this.refreshToken()
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe();
      }, refreshInterval);
    }
  }
}