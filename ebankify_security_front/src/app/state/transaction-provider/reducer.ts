import { createReducer, on } from "@ngrx/store";
import { addTransaction, removeTransaction, resetBasket, updateTransaction } from "./actions";
import { transaction } from "../../dashboard/interfaces/transaction";

export interface TransactionState {
    transactions: transaction[];
}

const initialState: TransactionState = {
    transactions: [],
};
  

export const _transactionsReducer = createReducer(
    initialState,
    on(addTransaction, (state, { transaction }) => ({ ...state, transactions: [...state.transactions, transaction] })),
    on(updateTransaction, (state, { transaction }) => ({
      ...state,
      transactions: state.transactions.map(t => t.id === transaction.id ? transaction : t)
    })),
    on(removeTransaction, (state, { transactionId }) => ({
      ...state,
      transactions: state.transactions.filter(t => t.id !== transactionId)
    })),
    on(resetBasket, () => initialState)
);