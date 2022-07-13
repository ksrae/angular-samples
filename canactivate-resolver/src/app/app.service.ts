import { Injectable } from "@angular/core";
import { BehaviorSubject, interval, map, Observable, of, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isLogin: boolean = false;

  getData(): Observable<boolean> {
    return interval(1000).pipe(
      map(() => this.isLogin)
    )
  }

  setLogin() {
    this.isLogin = true;
  }
}
