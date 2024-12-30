export interface CreateAccount {
    customName: string
};

export interface AccountDetails {
    customName: string;
    accountNumber: string;
    balance: boolean;
    createdAt: string;
};

export interface DeleteAccount {
    accountNumber: string;
};