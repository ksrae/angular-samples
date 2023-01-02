import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, map, interval, of, shareReplay, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  t$ = new BehaviorSubject<number>(0);

  constructor() {
    interval(2000).pipe(
      take(6),

    ).subscribe(t =>
      this.t$.next(this.t$.getValue() + 1)
    );
  }
}
