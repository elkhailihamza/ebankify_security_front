import { Component, DestroyRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Login } from '../interfaces/login';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private readonly auth: AuthService, 
    private readonly formBuilder: FormBuilder, 
    private readonly destroyRef: DestroyRef) 
    {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      });
    }

    onSubmit() {
      this.isLoading = true;
      if (!this.loginForm.valid) {
        this.isLoading = false;
        return;
      }

      const data = this.loginForm.value as Login;
      this.auth.login(data)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.isLoading = false;
        })
      ).subscribe();
    }
}
