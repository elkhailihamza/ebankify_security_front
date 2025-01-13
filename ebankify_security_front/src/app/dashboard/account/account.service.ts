import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { AccountDetails, CreateAccount, SelectAccount } from '../interfaces/account';
import { defaultResponse } from '../../interface/default';
import { ToastService } from '../../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private toast: ToastService) { }

  viewOwnAccounts(): Observable<any> {
    return this.http.get<AccountDetails[]>("accounts/")
    .pipe(
      catchError(error => {
        this.toast.fire("error", error.error.message);
        return EMPTY;
      }),
    );
  }

  viewCertainAccount(accountNumber: string): Observable<any> {
    return this.http.get(`accounts/${accountNumber}/view`)
    .pipe(
      catchError(error => {
        this.toast.fire("error", error.error.message);
        return EMPTY;
      })
    )
  }

  createAccount(data: CreateAccount): Observable<any> {
    return this.http.post("accounts/create", data)
    .pipe(
      catchError(error => {
        this.toast.fire("error", error.error.message);
        return EMPTY;
      })
    )
  }

  deleteAccount(data: SelectAccount): Observable<any> {
    return this.http.delete<defaultResponse>("accounts/"+data.accountNumber+"/delete")
    .pipe (
      catchError(error => {
        this.toast.fire("error", error.error.message);
        return EMPTY;
      })
    )
  }
}
