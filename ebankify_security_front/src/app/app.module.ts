import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { authInterceptor } from './auth/auth.interceptor';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast/toast.service';
import { ToastComponent } from './toast/toast/toast.component';
import { httpInterceptor } from './http/http.interceptor';
import { StoreModule } from '@ngrx/store';
import { _transactionsReducer } from './state/transaction-provider/reducer';



export const fetchToken = () => {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: fetchToken,
      }
    }),
    StoreModule.forRoot({transactions: _transactionsReducer})
  ],
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, httpInterceptor])
    ),
    ToastService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
