import { Component } from '@angular/core';
import { AccountFullDetails } from '../../interfaces/account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent {
  account: AccountFullDetails | null = null;

  constructor(private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.account = this.router.snapshot.data['account'];
  }
}
