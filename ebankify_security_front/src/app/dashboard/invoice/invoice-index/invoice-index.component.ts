import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { invoice } from '../../interfaces/invoice';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-invoice-index',
  templateUrl: './invoice-index.component.html',
  styleUrl: './invoice-index.component.css'
})
export class InvoiceIndexComponent {
  invoices: invoice[] = [];

  constructor(private route: ActivatedRoute, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.invoices = this.route.snapshot.data['invoices'] as invoice[];
  }

  getFormattedDate(date: string): string {
    return this.datePipe.transform(date, 'dd MMM yyyy, hh:mm a') || '';
  }
}
