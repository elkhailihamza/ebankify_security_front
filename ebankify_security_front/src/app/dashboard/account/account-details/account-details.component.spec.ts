import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsComponent } from './account-details.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccountRouterModule } from '../account-router.module';
import { AccountService } from '../account.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { transaction } from '../../interfaces/transaction';
import { AccountDetails } from '../../interfaces/account';

describe('AccountDetailsComponent', () => {
  let component: AccountDetailsComponent;
  let fixture: ComponentFixture<AccountDetailsComponent>;

  beforeEach(async () => {
    const accountDetails: AccountDetails = {
      customName: "string",
      accountNumber: "12345",
      balance: "4000",
      createdAt: new Date().toISOString(),
    };

    const activatedRouteStub = {
      params: of({ accountNumber: '12345' }),
      snapshot: {
        data: {
          account: accountDetails
        }
      }
    };

    await TestBed.configureTestingModule({
      declarations: [
        AccountDetailsComponent,
      ],
      imports: [
        CommonModule,
      ],
      providers: [
        AccountService,
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
