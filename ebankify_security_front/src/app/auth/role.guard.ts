import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const userRoles = auth.user()?.roles || [];
  const requiredRoles = route.data['roles'] || [];

  if (!requiredRoles || requiredRoles.length === 0) {
    return true;
  }

  const hasRequiredRole = requiredRoles.some((role: string) => userRoles.includes(role));

  if (!hasRequiredRole) {
    router.navigate(['/auth/login']);
    return false;
  }

  return true;
};
