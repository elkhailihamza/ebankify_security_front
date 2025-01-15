import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCreateComponent } from './transaction-create.component';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from '../../dashboard-routing.module';
import { DashboardComponent } from '../../dashboard.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

describe('TransactionCreateComponent', () => {
  let component: TransactionCreateComponent;
  let fixture: ComponentFixture<TransactionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
          DashboardComponent,
          NavbarComponent,
          SidebarComponent
        ],
        imports: [
          DashboardRoutingModule,
          CommonModule,
          HttpClientModule
        ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
