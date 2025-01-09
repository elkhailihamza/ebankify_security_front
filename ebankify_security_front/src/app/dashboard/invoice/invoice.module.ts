import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceIndexComponent } from './invoice-index/invoice-index.component';
import { InvoiceService } from './invoice.service';
import { InvoiceRouterModule } from './invoice-router.module';


@NgModule({
  declarations: [
    InvoiceIndexComponent
  ],
  imports: [
    CommonModule,
    InvoiceRouterModule
  ],
  providers: [
    InvoiceService
  ]
})
export class InvoiceModule { }
