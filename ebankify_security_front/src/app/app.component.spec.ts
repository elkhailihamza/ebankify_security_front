import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToastService } from './toast/toast.service';
import { ToastComponent } from './toast/toast/toast.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
          AppComponent,
          ToastComponent
        ],
        imports: [
          CommonModule,
          BrowserModule,
          AppRoutingModule,
          RouterModule,
          HttpClientModule,
        ],
        providers: [
          ToastService
        ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ebankify_security_front' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ebankify_security_front');
  });
});
