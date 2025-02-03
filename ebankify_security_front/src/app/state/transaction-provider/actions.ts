import { createAction, props } from "@ngrx/store";
import { transaction } from "../../dashboard/interfaces/transaction";

export const addTransaction = createAction('[Transaction] Add', props<{ transaction: transaction }>());
export const updateTransaction = createAction('[Transaction] Update', props<{ transaction: transaction }>());
export const removeTransaction = createAction('[Transaction] Remove', props<{ transactionId: string }>());
export const resetBasket = createAction('[Transaction] Reset');