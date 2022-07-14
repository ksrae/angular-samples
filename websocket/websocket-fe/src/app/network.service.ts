import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export interface NetworkResponse {
  result: 'success' | 'close' | 'error';
  code: number;
  data: string;
}

/**
 * 웹소켓을 angular에서 직접 연결
 *
 *
 * @export
 * @class NetworkService
 */
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  url = 'ws://localhost:8001';
  ws: WebSocket;

  ws$ = new Subject<NetworkResponse>();
  wsResponse$ = new Subject<NetworkResponse>();

  constructor() {
    // handshake
    this.ws = new WebSocket(this.url);
  }

  create() {
    console.log(WebSocket.CONNECTING);
    console.log(WebSocket.OPEN);
    console.log(WebSocket.CLOSING);
    console.log(WebSocket.CLOSED);


    if (this.ws.readyState === WebSocket.OPEN) {
      // request to server
      this.ws.send(
        JSON.stringify({
          data: 'received message'
        }
      ));

      // response from server
      this.ws.onmessage = (e: MessageEvent) => {
        const response: NetworkResponse = JSON.parse(e.data);
        if(response.result === 'success') {
          this.ws$.next(response);
        }

      }

      // websocket close
      this.ws.onclose = (e: CloseEvent) => {
        this.ws$.next(
          {
            result: 'close',
            code: 999,
            data: 'close'
          });

        // unsubscribe observable variables.
        this.ws$.unsubscribe();
      }
    }


  }

}
