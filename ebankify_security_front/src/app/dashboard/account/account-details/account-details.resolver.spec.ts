import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { accountDetailsResolver } from './account-details.resolver';

describe('accountDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => accountDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
