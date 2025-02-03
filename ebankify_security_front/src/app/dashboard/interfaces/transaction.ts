export interface transaction {
    id?: string;
    type?: string;
    amount?: number;
    status?: string;
    sourceAccountNumber?: string;
    destinationAccountNumber?: string;
}