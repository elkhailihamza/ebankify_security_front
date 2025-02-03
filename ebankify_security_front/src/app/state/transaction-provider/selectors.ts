import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TransactionState } from "./reducer";

export const selectTransactionState = createFeatureSelector<TransactionState>('transactions');

export const selectTransactions = createSelector(
  selectTransactionState,
  (state: TransactionState) => state.transactions
)

export const selectTotalAmount = createSelector(
  selectTransactions,
  (transactions) => transactions.reduce((total, transaction) => total + transaction.amount!, 0)
);