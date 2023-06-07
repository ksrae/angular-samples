import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddMessage, Message } from './message.action';

@State<Message[]>({
  name: 'messages',
  defaults: []
})
@Injectable({providedIn: 'root'})
export class MessagesState {
  @Selector() static getMessage(state: Message) { return state; }

  @Action(AddMessage)
  addMessage(ctx: StateContext<Message[]>, { from, message }: AddMessage) {
    const state = ctx.getState();
    // omit `type` property that server socket sends
    ctx.setState([...state, {from, message}]);
  }
}
