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