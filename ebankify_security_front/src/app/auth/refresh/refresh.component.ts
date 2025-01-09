import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-refresh',
  template: '',
})
export class RefreshComponent {
  constructor(private service: AuthService) {}

  ngOnInit(): void {
    this.service.refreshToken().subscribe();
  }
}
