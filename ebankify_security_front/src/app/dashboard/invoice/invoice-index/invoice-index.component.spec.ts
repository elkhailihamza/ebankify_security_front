import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceIndexComponent } from './invoice-index.component';

describe('InvoiceIndexComponent', () => {
  let component: InvoiceIndexComponent;
  let fixture: ComponentFixture<InvoiceIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceIndexComponent]
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
