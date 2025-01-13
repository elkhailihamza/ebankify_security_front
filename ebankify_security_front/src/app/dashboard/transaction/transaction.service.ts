import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { ToastService } from '../../toast/toast.service';
import { transaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private readonly BASE_URL: string = "transactions/";

  constructor(private http: HttpClient, private toast: ToastService) { }

  fetchTransactions(): Observable<any> {
    return this.http.get<transaction[]>(`${this.BASE_URL}`).pipe(
      catchError((err) => {
        this.toast.fire('error', err.error.message);
        return EMPTY;
      })
    )
  }
}
