import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { SecurityService } from '../services/security.service';
import { States } from '../constant/states.constant';

@Injectable()
export class PsGuard implements CanActivate, CanLoad {

  constructor(private securityService: SecurityService,
              private router: Router) {
  }

  canLoad(): boolean {
    return this.isPsClient();
  }

  canActivate(): boolean {
    return this.isPsClient();
  }

  isPsClient(): boolean {
    if (this.securityService.isPsClient()) {
      return true;
    }

    this.router.navigate([States.LOGIN]);
    return false;
  }
}