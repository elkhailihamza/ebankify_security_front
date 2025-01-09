import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { invoice } from '../../interfaces/invoice';

export const invoiceIndexResolver: ResolveFn<invoice[]> = (route, state) => {
  const service = inject(InvoiceService);
  return service.fetchInvoice();
};
