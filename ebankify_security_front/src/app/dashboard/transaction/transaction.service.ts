import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { ToastService } from '../../toast/toast.service';
import { transaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private readonly BASE_URL: string = "transactions";

  constructor(private http: HttpClient, private toast: ToastService) { }

  fetchTransactions(): Observable<any> {
    return this.http.get<transaction[]>(`${this.BASE_URL}/`).pipe(
      catchError((err) => {
        this.toast.fire('error', err.error.message);
        return EMPTY;
      })
    )
  }

  createTransaction(data: transaction): Observable<any> {
    return this.http.post<transaction>(`${this.BASE_URL}/create`, data)
    .pipe(
      catchError((err) => {
        this.toast.fire('error', err.error.message);
        return EMPTY;
      })
    )
  }

  fetchImportantTransactions(): Observable<any> {
    return this.http.get<transaction[]>(`${this.BASE_URL}/important/all`)
    .pipe(
      catchError((err) => {
        const errorMessage = err.error?.message || 'An unknown error occurred';
        this.toast.fire('error', errorMessage);
        return EMPTY;
      })
    )
  }

  acceptOrDenyTransaction(data: transaction, acceptOrDeny: boolean): Observable<any> {
    const acceptOrDenyString = acceptOrDeny ? "accept" : "reject";
    return this.http.post<void>(`${this.BASE_URL}/${data.id}/${acceptOrDenyString}`, null)
    .pipe(
      catchError((err) => {
        const errMsg = err.error?.message || "An error has occurred";
        this.toast.fire("error", errMsg);
        return EMPTY;
      })
    )
  }
}
