import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { SecurityService } from '../services/security.service';
import { States } from '../constant/states.constant';

@Injectable()
export class JdeGuard implements CanActivate, CanLoad {

  constructor(private securityService: SecurityService,
              private router: Router) {
  }

  canLoad(): boolean {
    return this.isJdeClient();
  }

  canActivate(): boolean {
    return this.isJdeClient();
  }

  isJdeClient(): boolean {
    if (this.securityService.isJdeClient()) {
      return true;
    }

    this.router.navigate([States.LOGIN]);
    return false;
  }
}