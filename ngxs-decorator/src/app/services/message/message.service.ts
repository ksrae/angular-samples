import { Injectable } from "@angular/core";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import { Select } from "@ngxs/store";
import { ConnectWebSocket, SendWebSocketMessage } from "@ngxs/websocket-plugin";
import { Observable } from "rxjs";
import { Message, MessagesState } from "./message.state";

@Injectable({providedIn: 'root'})
export class MessageService {
  @Select(MessagesState.getMessage) messages$!: Observable<Message[]>;

  @Dispatch()
  connect(): ConnectWebSocket {
    return new ConnectWebSocket();
  }
  @Dispatch()
  sendMessage(from: string, message: string): SendWebSocketMessage {
    return new SendWebSocketMessage({
      type: 'message',
      from,
      message
    });


    //return new AddMessage(event.payload);
    // this.store.dispatch(event);
    // return new AddMessage(from, message);

    // return new AddMessage(new SendWebSocketMessage({
    //   type: 'message',
    //   from,
    //   message
    // }))
  }
}
