import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export interface NetworkResponse {
  result: 'success' | 'close' | 'error' | 'timeout';
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
  // url = 'ws://fs-rd-dev-fw01:20001/ws';
  ws!: WebSocket;

  ws$ = new Subject<NetworkResponse>();
  wsResponse$ = new Subject<NetworkResponse>();

  constructor() {
    // handshake
    // this.ws = new WebSocket(this.url);
  }
  connect(url: string) {
    this.ws = new WebSocket(url);
  }

  create() {
    if (this.ws.readyState === WebSocket.OPEN) {
      // request to server
      this.ws.send(
        JSON.stringify({
          data: {
            id: 144,
            username: 'ellen',
            category: 'my',
            menuId: 27,
            parentId: -1
          }
        }
      ));

      // response from server
      this.ws.onmessage = (e: MessageEvent) => {
        console.log('response:', {e});
        // const response: NetworkResponse = JSON.parse(e.data);
        // if(response.result === 'success') {
        //   this.ws$.next(response);
        // }

      }

      // websocket close
      this.ws.onclose = (e: CloseEvent) => {
        console.log('close:', {e});
        // this.ws$.next(
        //   {
        //     result: 'close',
        //     code: 999,
        //     data: 'close'
        //   });

        // // unsubscribe observable variables.
        // this.ws$.unsubscribe();
      }
    }


  }

}
