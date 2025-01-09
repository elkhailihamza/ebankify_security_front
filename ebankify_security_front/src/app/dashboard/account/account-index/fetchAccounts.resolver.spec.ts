import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { fetchAccountsResolver } from './fetchAccounts.resolver';
import { AccountDetails } from '../../interfaces/account';

describe('fetchAccounts', () => {
  const executeResolver: ResolveFn<AccountDetails[]> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => fetchAccountsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
