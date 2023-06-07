export interface IUser {
  name: string;
  notes: string;
}

export class GetAllUserAction {
  static readonly type = '[User]: getAll';
}

export class SetUserAction {
  static readonly type = '[User]: set';
  constructor(public payload: IUser) {}
}
