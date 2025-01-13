import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRouterModule } from './transaction-router.module';
import { TransactionService } from './transaction.service';
import { TransactionIndexComponent } from './transaction-index/transaction-index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';



@NgModule({
  declarations: [
    TransactionIndexComponent,
    TransactionCreateComponent
  ],
  imports: [
    CommonModule,
    TransactionRouterModule,
    ReactiveFormsModule
  ],
  providers: [
    TransactionService
  ]
})
export class TransactionModule { }
