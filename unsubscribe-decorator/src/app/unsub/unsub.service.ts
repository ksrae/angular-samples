import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";

@Injectable({providedIn: 'root'})
export class UnsubService {
  #subscriptions$: Subscription[] = [];

  set add(item: Subscription) {
    this.#subscriptions$.push(item);
  }
  destroy() {
    console.log('<<<<<<destroy>>>>')
    this.#subscriptions$?.forEach(item => item.unsubscribe());
  }
}


