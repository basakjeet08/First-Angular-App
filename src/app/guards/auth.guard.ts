import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

// This function checks if the user is logged in or not and accordingly let the user access the route
export const authGuard: CanActivateChildFn = (_route, _state) => {
  const authService = inject(AuthService);
  if (authService.isUserLogged()) {
    return true;
  } else {
    alert('Login first to open this route');
    return false;
  }
};
