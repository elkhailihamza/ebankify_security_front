import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrl: './account-create.component.css'
})
export class AccountCreateComponent {

  constructor(private account: AccountService, private router: Router) {};

  
}
