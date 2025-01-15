import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionIndexComponent } from './transaction-index.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { transaction } from '../../interfaces/transaction';

describe('TransactionIndexComponent', () => {
  let component: TransactionIndexComponent;
  let fixture: ComponentFixture<TransactionIndexComponent>;
  const transactions: transaction[] = [
    {
      id: '1',
      amount: '2000',
      destinationAccountNumber: '123456',
      sourceAccountNumber: '123454',
      status: 'ACCEPTED',
      type: 'INSTANT'
    },
    {
      id: '2',
      amount: '5000',
      destinationAccountNumber: '123456',
      sourceAccountNumber: '123454',
      status: 'PENDING',
      type: 'STANDARD'
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TransactionIndexComponent,
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
      ],
      providers: [
        TransactionService,
        { provide: ActivatedRoute, useValue: {
          snapshot: {
            data: {
              transactions: transactions
            }
          }
        }}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
