import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastMessage } from './interface/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubjet = new Subject<ToastMessage>();

  constructor() {}

   fire(method: "success" | "error", message: string) {
    const toast: ToastMessage = {
      method: method,
      message: message
    }

    this.toastSubjet.next(toast);
  }

  getToast() {
    return this.toastSubjet.asObservable();
  }

}