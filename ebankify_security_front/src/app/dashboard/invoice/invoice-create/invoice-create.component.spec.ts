import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceCreateComponent } from './invoice-create.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceRouterModule } from '../invoice-router.module';
import { InvoiceService } from '../invoice.service';

describe('InvoiceCreateComponent', () => {
  let component: InvoiceCreateComponent;
  let fixture: ComponentFixture<InvoiceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
          InvoiceCreateComponent
      ],
      imports: [
        CommonModule,
        InvoiceRouterModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [
        InvoiceService,
        DatePipe,
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
