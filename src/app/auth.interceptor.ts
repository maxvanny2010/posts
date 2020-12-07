import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('INTERCEPTOR', req);
    const clone = req.clone({
      headers: req.headers.append('Auth', 'SOME_RANDOM_TOKEN')
    });
    return next.handle(clone)
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Response) {
            console.log('RESPONSE', event.body);
          }
        })
      );
  }
}
