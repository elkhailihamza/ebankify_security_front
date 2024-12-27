import { Component, DestroyRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { catchError, EMPTY, tap } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder, 
    private readonly auth: AuthService, 
    private readonly destroyRef: DestroyRef
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(14), Validators.max(100)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const data = this.registerForm.value;
      this.auth
        .register(data)
        .pipe(
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe();
    }
  }
}
