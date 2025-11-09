import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  if (/^https?:\/\//i.test(req.url)) {
    return next(req).pipe(
      catchError((err) => {
        console.error('[API Error - External URL]', err);
        return throwError(() => err);
      })
    );
  }

  const newReq = req.clone({
    url: `${environment.apiBaseUrl}${req.url.startsWith('/') ? '' : '/'}${req.url}`,
  });

  return next(newReq).pipe(
    catchError((err) => {
      console.error('[API Error - Interceptor]', {
        url: newReq.url,
        status: err.status,
        message: err.message,
        error: err.error,
      });
      return throwError(() => err);
    })
  );
};
