import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { InvoiceIndexComponent } from './invoice-index/invoice-index.component';
import { InvoiceService } from './invoice.service';
import { InvoiceRouterModule } from './invoice-router.module';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InvoiceIndexComponent,
    InvoiceCreateComponent
  ],
  imports: [
    CommonModule,
    InvoiceRouterModule,
    ReactiveFormsModule
  ],
  providers: [
    InvoiceService,
    DatePipe,
  ]
})
export class InvoiceModule { }
