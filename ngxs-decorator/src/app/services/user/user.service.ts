import { Injectable } from "@angular/core";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import { Select } from "@ngxs/store";
import { Observable, map } from "rxjs";
import { IUser, SetUserAction } from "./user.action";
import { UserState } from "./user.state";

@Injectable({providedIn: 'root'})
export class UserService {
  @Select(UserState.allUser) users$!: Observable<IUser[]>;

  constructor(
  ) {}

  @Dispatch()
  setUser(userInfo: IUser): SetUserAction {
    return new SetUserAction(userInfo);
  }
}
