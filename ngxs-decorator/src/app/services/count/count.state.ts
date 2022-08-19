import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";

export interface ICount {
  count: number;
}
export class IncrementAction {
  static readonly type = '[Increment]: description';
}
export class SetCountAction {
  static readonly type = '[SetCount]';
  constructor(public payload: number) {}
}

@State<number>({
  name: 'count',
  defaults: 0
})
@Injectable({providedIn: 'root'})
export class CountState {
  @Selector() static totalCount(state: number) { return state; }

  @Action(IncrementAction)
  public increment(ctx: StateContext<number>) {
    const state = ctx.getState();
    ctx.setState(state + 1);
  }

  @Action(SetCountAction)
  public setCount(ctx: StateContext<number>, { payload }: SetCountAction) {
    ctx.setState(payload);
  }
}
