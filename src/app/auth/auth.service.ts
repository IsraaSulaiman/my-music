import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authToken: string =
    '74911658a91b183f07d0eebabe96f89c634aa4b91c7ecfd7f0566cd88d898da5';

  isAuthenticated() {
    return this.authToken ? true : false;
  }

  get authToken() {
    return this._authToken;
  }
}
