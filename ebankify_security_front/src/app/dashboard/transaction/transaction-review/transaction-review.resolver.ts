import { ResolveFn } from '@angular/router';
import { transaction } from '../../interfaces/transaction';
import { inject } from '@angular/core';
import { TransactionService } from '../transaction.service';

export const transactionReviewResolver: ResolveFn<transaction[]> = (route, state) => {
  const service = inject(TransactionService);
  return service.fetchImportantTransactions();
};
