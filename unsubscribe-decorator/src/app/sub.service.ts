import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class SubService {
  products$ = new Subject();
  users$ = new Subject();

  constructor() {
    this.products$.next(0);
    this.users$.next(0);

    setInterval(() => {
      console.log(1);
      this.products$.next(Math.random());
      this.users$.next(Math.random());
    }, 1000)

  }
}
