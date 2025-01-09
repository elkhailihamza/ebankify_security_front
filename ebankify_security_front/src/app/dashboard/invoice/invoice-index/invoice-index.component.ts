import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { invoice } from '../../interfaces/invoice';

@Component({
  selector: 'app-invoice-index',
  templateUrl: './invoice-index.component.html',
  styleUrl: './invoice-index.component.css'
})
export class InvoiceIndexComponent {
  invoices: invoice[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.invoices = this.route.snapshot.data['invoices'] as invoice[];
  }
}
