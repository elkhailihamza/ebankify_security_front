export interface CreateAccount {
    customName: string
};

export interface AccountDetails {
    customName: string;
    accountNumber: string;
    balance: string;
    createdAt: string;
};

export interface SelectAccount {
    accountNumber: string;
};

export interface AccountFullDetails {
    id: string;
    customName: string;

    accountNumber: string;
    balance: string;
    created_at: string;
    status: string;

    sentTransactions: Array<transactions>;
    receivedTransactions: Array<transactions>;
};

export interface transactions {
    id: string;

    type: string;
    amount: string;

    sourceAccount: string;
    destinationAccount: string;
    status: string;
};