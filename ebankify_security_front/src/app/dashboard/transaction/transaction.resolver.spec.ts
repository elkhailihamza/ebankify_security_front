import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { transactionResolver } from './transaction-index.resolver';

describe('transactionResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => transactionResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
