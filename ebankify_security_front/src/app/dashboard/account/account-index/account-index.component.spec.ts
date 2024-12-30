import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountIndexComponent } from './account-index.component';

describe('AccountIndexComponent', () => {
  let component: AccountIndexComponent;
  let fixture: ComponentFixture<AccountIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountIndexComponent]
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
