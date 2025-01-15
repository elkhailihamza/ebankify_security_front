import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { transaction } from '../../interfaces/transaction';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-review',
  templateUrl: './transaction-review.component.html',
  styleUrl: './transaction-review.component.css'
})
export class TransactionReviewComponent {
  importantTransactions: transaction[] = [];

  constructor(private service: TransactionService, private acRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.importantTransactions = this.acRoute.snapshot.data["transaction"];
  }

  acceptTransaction(id: string): void {
    const transaction: transaction = { id };
    this.service.acceptOrDenyTransaction(transaction, true).subscribe();
    return;
  }

  declineTransaction(id: string): void {
    const transaction: transaction = { id };
    console.log(transaction);
    this.service.acceptOrDenyTransaction(transaction, false).subscribe();
    return;
  }
}
