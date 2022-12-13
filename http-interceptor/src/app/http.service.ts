import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, first, tap, of, EMPTY, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  error$ = new BehaviorSubject('');

  constructor(
    private http: HttpClient
  ) {}

  error(type: number) {
    return this.http.get(`http://localhost:3000/${type}`).pipe(
      first(),
      // catchError(err => this.commonError(err))
    )
  }
  error2(type: number) {
    console.log('error2');
    return this.http.get(`http://localhost:3000/${type}`).pipe(
      first(),
      catchError(err => this.commonError(err))
      //catchError(err => throwError(() => new Error(err)))
    )
  }

  commonError(err: any) {
    console.log({err});
    if(err.status === 401) {
      console.log('401 error');
      return throwError(() => null)
    }
    return throwError(() => err)
  }
}
