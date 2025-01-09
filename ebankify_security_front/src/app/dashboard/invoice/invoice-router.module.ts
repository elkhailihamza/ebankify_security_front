import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceIndexComponent } from './invoice-index/invoice-index.component';
import { invoiceIndexResolver } from './invoice-index/invoice-index.resolver';

const routes: Routes = [
  {
    path: '',
    component: InvoiceIndexComponent,
    resolve: {invoices: invoiceIndexResolver}
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class InvoiceRouterModule { }
