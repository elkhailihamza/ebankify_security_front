import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { accountResolver } from './account.resolver';
import { AccountDetails } from '../interfaces/account';

describe('accountResolver', () => {
  const executeResolver: ResolveFn<AccountDetails[]> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => accountResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
