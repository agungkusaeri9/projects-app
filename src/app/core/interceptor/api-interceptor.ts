import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';
export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  if (/^https?:\/\//i.test(req.url)) {
    return next(req);
  }
  const newReq = req.clone({
    url: `${environment.apiBaseUrl}${req.url.startsWith('/') ? '' : '/'}${req.url}`,
  });
  return next(newReq);
};
