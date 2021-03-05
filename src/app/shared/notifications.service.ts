import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private toastr: ToastrService, private router: Router) {}

  showSuccess(msg: string, title: string = '') {
    this.toastr.success(title, msg);
  }

  showError(msg: string, title: string = '') {
    this.toastr.error(title, msg);
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      this.showError('Something went wrong. please try another time');
    } else {
      this.showError(`${error.status}`, error.statusText);
      //Empty the token and redirecto to login page
      if (error.status === 401) this.router.navigate(['/']);
    }
    return throwError(error);
  }
}
