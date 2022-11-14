import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, catchError, EmptyError, tap, throwError } from 'rxjs';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http-interceptor';
  message = '';

  constructor(
    private http: HttpClient,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.httpService.error$.subscribe(err => {
      console.log('----------', err);
    })
  }
  normal() {
    this.http.get('http://localhost:3000/').pipe(
      first(),
      tap(a => console.log({a})),
      catchError((err: any) => {
        console.log({err});
        return throwError(() => new Error(err));
      })
    ).subscribe();
  }
  error(type: number) {
    this.httpService.error(type).pipe(
      tap(a => console.log({a})),
      catchError((err: any) => {
        console.log('error111', err);
        this.message = err ?? null;
        return throwError(() => null)
      })
    ).subscribe();
  }
  error2(type: number) {
    this.httpService.error2(type).pipe(
      tap(a => console.log({a})),
      catchError((err: any) => {
        this.message = err ?? null;
        return throwError(() => err)
        // return throwError(() => new Error(err));
      })
    ).subscribe();
  }
}
