import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { SecurityService } from '../services/security.service';
import { States } from '../constant/states.constant';

@Injectable()
export class EbsGuard implements CanActivate, CanLoad {

  constructor(private securityService: SecurityService,
              private router: Router) {
  }

  canLoad(): boolean {
    return this.isEbsClient();
  }

  canActivate(): boolean {
    return this.isEbsClient();
  }

  isEbsClient(): boolean {
    if (this.securityService.isEbsClient()) {
      return true;
    }

    this.router.navigate([States.LOGIN]);
    return false;
  }
}