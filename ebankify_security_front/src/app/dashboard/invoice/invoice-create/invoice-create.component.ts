import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InvoiceService } from '../invoice.service';
import { invoice } from '../../interfaces/invoice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrl: './invoice-create.component.css'
})
export class InvoiceCreateComponent {
  invoiceCreate: FormGroup;

  constructor(private service: InvoiceService, private formBuilder: FormBuilder, private router: Router) {
    this.invoiceCreate = this.formBuilder.group({
      amountDue: '',
      dueDate: '',
      owner_id: ''
    });
  }

  onSubmit() {
    if (this.invoiceCreate.valid) {
      const data = this.invoiceCreate.value as invoice;
      this.service.sendInvoice(data).subscribe(
        () => this.router.navigate(['/dashboard/invoice/'])
      );
    }
  }
}
