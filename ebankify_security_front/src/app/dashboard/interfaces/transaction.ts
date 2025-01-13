export interface transaction {
    id: string;
    type: string;
    amount: string;
    sourceAccountId: string;
    destinationAccountId: string;
}