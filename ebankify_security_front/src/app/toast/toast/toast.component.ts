import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';
import { ToastMessage } from '../interface/toast';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit, OnDestroy {
  toastMessage: ToastMessage | null = null;
  subscription: Subscription | undefined;

  constructor(private toast: ToastService) {}

  ngOnInit(): void {
    this.subscription = this.toast.getToast().subscribe((message: ToastMessage) => {
      this.toastMessage = message;
      
      setTimeout(() => {
        this.toastMessage = null;
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
