import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { ToastService } from '../../toast/toast.service';
import { invoice } from '../interfaces/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient, private toast: ToastService) { }

  fetchInvoice(): Observable<any> {
    return this.http.get<invoice[]>("http://localhost:8082/invoice/all")
    .pipe(
      catchError((error) => {
        this.toast.fire("error", error.error.message);
        return EMPTY;
      }),
    )
  }
}
