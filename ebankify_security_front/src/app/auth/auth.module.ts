import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule { }
