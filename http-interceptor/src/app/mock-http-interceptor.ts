import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockInterceptor implements HttpInterceptor {
  protected value = 'Ignore';

  public intercept(
    request: HttpRequest<void>,
    next: HttpHandler,
  ): Observable<HttpEvent<void>> {
    console.log({request}, {next});
    return next.handle(
      request.clone(),
    );
  }
}
