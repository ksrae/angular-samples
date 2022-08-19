import { Injectable } from "@angular/core";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { CountState, IncrementAction, SetCountAction } from "./count.state";

@Injectable({providedIn: 'root'})
export class CountService {
  @Select(CountState.totalCount) totalCount$!: Observable<number>;

  constructor(
  ) {}

  @Dispatch()
  increment(): IncrementAction {
    return new IncrementAction();
  }

  @Dispatch()
  setCount(count: number = 0): SetCountAction {
    return new SetCountAction(count);
  }
}
