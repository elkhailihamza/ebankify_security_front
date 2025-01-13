import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { transaction } from '../../interfaces/transaction';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-index',
  templateUrl: './transaction-index.component.html',
  styleUrl: './transaction-index.component.css'
})
export class TransactionIndexComponent {
  transactions: transaction[] = [];

  constructor(private service: TransactionService, private acRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.transactions = this.acRouter.snapshot.data['transactions'];
  }
}
