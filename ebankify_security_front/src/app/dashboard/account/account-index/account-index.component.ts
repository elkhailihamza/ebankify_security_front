import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDetails, CreateAccount, SelectAccount } from '../../interfaces/account';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastService } from '../../../toast/toast.service';

@Component({
  selector: 'app-account-index',
  templateUrl: './account-index.component.html',
  styleUrl: './account-index.component.css'
})
export class AccountIndexComponent {
  accounts: AccountDetails[] = [];
  createForm: FormGroup;
  accountNumber: string = '';

  constructor(private account: AccountService, private formBuilder: FormBuilder, private route: ActivatedRoute, private toast: ToastService, private router: Router) {
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
        const account: string = res.customName || res.accountNumber;
        this.toast.fire("success", "Account ''"+account+"'' Created!");
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

  redirectTo(accountNumber: string): void {
    this.router.navigate([`/dashboard/account/${accountNumber}`])
  }
}
