import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceIndexComponent } from './invoice-index/invoice-index.component';
import { invoiceIndexResolver } from './invoice-index/invoice-index.resolver';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { roleGuard } from '../../auth/role.guard';

const routes: Routes = [
  {
    path: '',
    component: InvoiceIndexComponent,
    resolve: {invoices: invoiceIndexResolver}
  },
  {
    path: 'create',
    component: InvoiceCreateComponent,
    canActivate: [roleGuard],
    data: {
      roles: ['employee']
    }
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
