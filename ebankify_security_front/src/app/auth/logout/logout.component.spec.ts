import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { JwtUtilService } from '../../util/jwt-util.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
      providers: [
        AuthService,
        JwtUtilService,
        JwtHelperService,
        { provide: JWT_OPTIONS, useValue: {} },
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
