import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionIndexComponent } from './transaction-index/transaction-index.component';
import { TransactionIndexResolver } from './transaction-index/transaction-index.resolver';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionIndexComponent,
    resolve: {transactions: TransactionIndexResolver}
  },
  {
    path: 'create',
    component: TransactionCreateComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class TransactionRouterModule { }
