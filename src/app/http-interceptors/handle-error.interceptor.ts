import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

import { NotificationsService } from '../shared/notifications.service';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationsService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      retry(1),
      catchError((err) => this.notificationService.handleError(err))
    );
  }
}
