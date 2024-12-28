  import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

  @Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrl: './logout.component.css',
  })
  export class LogoutComponent implements OnInit, OnDestroy {
    private timeoutId: any;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
      this.startLogoutTimer();
    }

    ngOnDestroy(): void {
      this.clearLogoutTimer();
    }

    private startLogoutTimer(): void {
      this.timeoutId = setTimeout(() => {
        this.authService.logout();
      }, 3000);
    }

    private clearLogoutTimer(): void {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }
  }
