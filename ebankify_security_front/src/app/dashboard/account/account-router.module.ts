import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountIndexComponent } from './account-index/account-index.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { accountResolver } from './account.resolver';

const routes: Routes = [
  {
    path: '',
    component: AccountIndexComponent,
    resolve: {accounts: accountResolver}
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
