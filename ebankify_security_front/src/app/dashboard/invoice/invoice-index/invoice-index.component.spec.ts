import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceIndexComponent } from './invoice-index.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceRouterModule } from '../invoice-router.module';
import { InvoiceService } from '../invoice.service';
import { ActivatedRoute } from '@angular/router';
import { invoice } from '../../interfaces/invoice';

describe('InvoiceIndexComponent', () => {
  let component: InvoiceIndexComponent;
  let fixture: ComponentFixture<InvoiceIndexComponent>;
  const invoices: invoice[] = [
    {
      id: '1',
      amountDue: '300',
      dueDate: new Date().toISOString(),
      owner_id: '7'
    },
    {
      id: '2',
      amountDue: '1000',
      dueDate: new Date().toISOString(),
      owner_id: '7'
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
          InvoiceIndexComponent
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [
        InvoiceService,
        DatePipe,
        { provide: ActivatedRoute, 
          useValue: {
            snapshot: {
              data: {
                invoices: invoices
              }
            }
        }},
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
