import { TestBed } from '@angular/core/testing';

import { InvoiceService } from './invoice.service';
import { HttpClientModule } from '@angular/common/http';

describe('InvoiceService', () => {
  let service: InvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(InvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
