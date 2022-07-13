import { Injectable } from "@angular/core";
import { Observable, Subject, Subscription, TeardownLogic } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  test1$ = new Subject<boolean>();
  test2$ = new Subject<boolean>();
  test3$ = new Subject<boolean>();

  init() {
    setTimeout(() => {
      this.test1$.next(true);
    }, 500);

    setTimeout(() => {
      this.test2$.next(true);
    }, 1000);

    setTimeout(() => {
      this.test3$.next(true);
    }, 1500);
  }

}
