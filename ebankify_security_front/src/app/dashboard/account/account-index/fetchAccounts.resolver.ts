import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AccountService } from '../account.service';
import { AccountDetails } from '../../interfaces/account';

export const fetchAccountsResolver: ResolveFn<AccountDetails[]> = (route, state) => {
  const accountService = inject(AccountService);

  return accountService.viewOwnAccounts();
};
