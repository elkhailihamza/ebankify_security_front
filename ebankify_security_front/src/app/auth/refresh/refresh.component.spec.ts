import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshComponent } from './refresh.component';
import { HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

describe('RefreshComponent', () => {
  let component: RefreshComponent;
  let fixture: ComponentFixture<RefreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefreshComponent],
      imports: [
        HttpClientModule
      ],
      providers: [
        JwtHelperService,
        { provide: JWT_OPTIONS, useValue: {} },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
