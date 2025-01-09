import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountIndexComponent } from './account-index/account-index.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { fetchAccountsResolver } from './account-index/fetchAccounts.resolver';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { accountDetailsResolver } from './account-details/account-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: AccountIndexComponent,
    resolve: {accounts: fetchAccountsResolver}
  },
  {
    path: ':accountNumber',
    component: AccountDetailsComponent,
    resolve: {account: accountDetailsResolver}
  },
  {
    path: 'create',
    component: AccountCreateComponent
  }
];  

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AccountRouterModule { }
