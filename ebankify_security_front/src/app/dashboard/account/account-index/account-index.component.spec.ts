import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountIndexComponent } from './account-index.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccountRouterModule } from '../account-router.module';
import { AccountService } from '../account.service';
import { AccountDetails } from '../../interfaces/account';
import { ActivatedRoute } from '@angular/router';

describe('AccountIndexComponent', () => {
  let component: AccountIndexComponent;
  let fixture: ComponentFixture<AccountIndexComponent>;

  beforeEach(async () => {
    const accounts: AccountDetails[] = [
      {
        customName: "string",
        accountNumber: "12345",
        balance: "4000",
        createdAt: new Date().toISOString(),
      },
      {
        customName: "string1",
        accountNumber: "12345",
        balance: "5000",
        createdAt: new Date().toISOString(),
      }
    ];

    const activatedRouteStub = {
      snapshot: {
        data: {
          accounts: accounts
        }
      }
    };


    await TestBed.configureTestingModule({
      declarations: [
          AccountIndexComponent,
        ],
        imports: [
          CommonModule,
          AccountRouterModule,
          ReactiveFormsModule,
          FormsModule,
          HttpClientModule
        ],
        providers: [
          AccountService,
          { provide: ActivatedRoute, useValue: activatedRouteStub },
        ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
