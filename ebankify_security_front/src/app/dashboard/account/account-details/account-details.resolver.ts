import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AccountService } from '../account.service';

export const accountDetailsResolver: ResolveFn<boolean> = (route, state) => {
  const service = inject(AccountService);
  const accountNumber = route.params['accountNumber'];
  return service.viewCertainAccount(accountNumber);
};
