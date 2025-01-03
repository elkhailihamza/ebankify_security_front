import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDetails, CreateAccount, SelectAccount } from '../../interfaces/account';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-index',
  templateUrl: './account-index.component.html',
  styleUrl: './account-index.component.css'
})
export class AccountIndexComponent {
  accounts: AccountDetails[] = [];
  createForm: FormGroup;
  accountNumber: string = '';

  constructor(private account: AccountService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.createForm = this.formBuilder.group({
      customName: '',
    });
  }

  ngOnInit(): void {
    this.accounts = this.route.snapshot.data['accounts'] as AccountDetails[];
  }


  createAccount() {
    const data = this.createForm.value as CreateAccount;
    this.account.createAccount(data).subscribe(
      (res) => {
        this.createForm.reset();
        this.accounts.push(res);
      }
    );
  }

  deleteAccount(data: SelectAccount) {
    this.account.deleteAccount(data).subscribe(
      () => {
        window.location.reload();
      }
    )
  }
}
