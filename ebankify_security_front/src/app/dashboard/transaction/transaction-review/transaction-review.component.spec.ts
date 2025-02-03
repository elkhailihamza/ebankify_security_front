import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionReviewComponent } from './transaction-review.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionRouterModule } from '../transaction-router.module';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { transaction } from '../../interfaces/transaction';

describe('TransactionReviewComponent', () => {
  let component: TransactionReviewComponent;
  let fixture: ComponentFixture<TransactionReviewComponent>;
  const transaction: transaction = {
    id: '1',
    amount: 3000,
    destinationAccountNumber: '123456',
    sourceAccountNumber: '123454',
    status: 'ACCEPTED',
    type: 'STANDARD'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TransactionReviewComponent,
      ],
      imports: [
        CommonModule,
        TransactionRouterModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
      providers: [
        TransactionService,
        { provide: ActivatedRoute, useValue: {
          snapshot: {
            data: {
              transaction: transaction
            }
          }
        }}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
