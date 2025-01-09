import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LogoutComponent } from './logout/logout.component';
import { CommonModule } from '@angular/common';
import { JwtUtilService } from '../util/jwt-util.service';
import { RefreshComponent } from './refresh/refresh.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    RefreshComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  providers: [
    AuthService,
    JwtUtilService
  ],
})
export class AuthModule { }
