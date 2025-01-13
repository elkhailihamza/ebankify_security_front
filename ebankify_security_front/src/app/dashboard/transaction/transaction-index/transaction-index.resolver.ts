import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { transaction } from '../../interfaces/transaction';

export const TransactionIndexResolver: ResolveFn<transaction[]> = (route, state) => {
  const service = inject(TransactionService);
  return service.fetchTransactions();
};
