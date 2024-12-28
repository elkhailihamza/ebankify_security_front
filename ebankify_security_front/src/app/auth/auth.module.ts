import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule { }
