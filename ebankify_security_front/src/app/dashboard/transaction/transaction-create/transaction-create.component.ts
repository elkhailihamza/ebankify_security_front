import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { HttpClient } from '@angular/common/http';
import { transaction } from '../../interfaces/transaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrl: './transaction-create.component.css'
})
export class TransactionCreateComponent {
  transactionCreate: FormGroup;

  constructor(private service: TransactionService, private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.transactionCreate = formBuilder.group({
      sourceAccountNumber: '',
      destinationAccountNumber: '',
      amount: ''
    })
  }

  onSubmit(): void {
    if (this.transactionCreate.valid) {
      const data = this.transactionCreate.value as transaction;
      this.service.createTransaction(data).subscribe();
      this.router.navigate(['/dashboard/transaction']);
      return;
    }
  }
}
