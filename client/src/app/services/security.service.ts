import { Injectable } from '@angular/core';
import { AuthConstants } from '../constant/auth.constant';

@Injectable()
export class SecurityService {

  isLoggedIn() {
    // return !!localStorage.getItem(AuthConstants.AUTH_TOKEN_NAME);
    return true;
  }

  isEbsClient() {
    return true;
  }

  isJdeClient() {
    return false;
  }

  isPsClient() {
    return false;
  }
}
