import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRouterModule } from './transaction-router.module';
import { TransactionService } from './transaction.service';
import { TransactionIndexComponent } from './transaction-index/transaction-index.component';



@NgModule({
  declarations: [
    TransactionIndexComponent
  ],
  imports: [
    CommonModule,
    TransactionRouterModule
  ],
  providers: [
    TransactionService
  ]
})
export class TransactionModule { }
