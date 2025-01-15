import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
