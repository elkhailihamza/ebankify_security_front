import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { CreateAccount, SelectAccount } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  viewOwnAccounts(): Observable<any> {
    return this.http.get("http://localhost:8082/accounts/")
    .pipe(
      catchError(error => {
        console.log(error.error.message);
        return EMPTY;
      }),
    );
  }

  viewCertainAccount(data: SelectAccount): Observable<any> {
    return this.http.get("http://localhost:8082/accounts/"+data.accountNumber+"/view")
    .pipe(
      catchError(error => {
        console.log(error.error.message);
        return EMPTY;
      })
    )
  }

  createAccount(data: CreateAccount): Observable<any> {
    return this.http.post("http://localhost:8082/accounts/create", data)
    .pipe(
      catchError(error => {
        console.log(error.error.message);
        return EMPTY;
      })
    )
  }

  deleteAccount(data: SelectAccount): Observable<any> {
    return this.http.delete("http://localhost:8082/accounts/"+data.accountNumber+"/delete")
    .pipe (
      tap(() => {
        window.location.reload();
      }),
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    )
  }
}
