import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { IUser, SetUserAction } from "./user.action";

@State<IUser[]>({
  name: 'user',
  defaults: []
})
@Injectable({providedIn: 'root'})
export class UserState {
  @Selector() static allUser(state: IUser[]) { return state; }

  @Action(SetUserAction)
  public setUser(ctx: StateContext<IUser[]>, { payload }: SetUserAction) {
    const state = ctx.getState();
    const userList = [
      ...state,
      {
        name: payload.name,
        notes: payload.notes
      }
    ];

    const filtered = userList.reduce((prev: IUser[], curr: IUser) => {
      return prev.some(v => v.name === curr.name) ? prev: [...prev, curr]
    }, []);

    ctx.setState([...new Set(filtered)]);
  }
}
