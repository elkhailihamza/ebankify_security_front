import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionIndexComponent } from './transaction-index/transaction-index.component';
import { TransactionIndexResolver } from './transaction-index/transaction-index.resolver';

const routes: Routes = [
  {
    path: '',
    component: TransactionIndexComponent,
    resolve: {transactions: TransactionIndexResolver}
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
