import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionIndexComponent } from './transaction-index/transaction-index.component';
import { TransactionIndexResolver } from './transaction-index/transaction-index.resolver';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionReviewComponent } from './transaction-review/transaction-review.component';
import { transactionReviewResolver } from './transaction-review/transaction-review.resolver';

const routes: Routes = [
  {
    path: '',
    component: TransactionIndexComponent,
    resolve: {transactions: TransactionIndexResolver}
  },
  {
    path: 'create',
    component: TransactionCreateComponent
  },
  {
    path:'review',
    component: TransactionReviewComponent,
    resolve: {transaction: transactionReviewResolver}
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
