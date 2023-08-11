import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of, shareReplay, Subject, Subscription, switchMap, tap } from "rxjs";
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  a = new Subject();
  constructor(
    private httpClient: HttpClient
  ) {}

  // getget() {
  //   return of(val).pipe(
  //     delay(1000)
  //   );
  // }
  simulateHttp(val: any) {

  }

  get() {
    console.log('get');


    return this.httpClient.get('http://localhost:3000/api').pipe(
      switchMap(sourceValue => {
        return of(sourceValue);
      }),
      map(res => {
        return {
          ...res
        }
      }),
  );

  }

  post() {
    console.log('post');
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.get(
      'http://localhost:3000/api',
      // { data: 'test'},
      // { headers }
    ).pipe(
      switchMap(sourceValue => {
        return of(sourceValue);
      }),
      map(res => {
        return {
          ...res
        }
      }),
  );

  }

  login() {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let body = new URLSearchParams();
    body.set('username', 'aaa');
    body.set('password', 'bbb');

    return this.httpClient.post(
      'http://localhost:3000/login',
      body,
      { headers }
    ).pipe(

    );
  }
}
