import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { IncrementAction, SetCountAction } from "./count.action";

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
