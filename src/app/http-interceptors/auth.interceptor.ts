import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `bearer ${this.auth.authToken}`,
        ContentType: 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
    });
    return next.handle(authReq);
  }
}
