import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { SocketController } from "src/core/worker/socket.controller";
import { NetworkResponse } from "./network.service";
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ASocketService {
  socketResponse$ = new Observable<NetworkResponse>();
  sc = new SocketController();
  state!: number;
  subject: any;

  constructor() {
    this.socketResponse$ = this.sc.message$.pipe(
      map((message: any) => {
        if(message.type === 'state') {
          this.state = message.data;
          return '';
        }
        return message;
      })
    ) as Observable<NetworkResponse>;

    // this.subject = webSocket('ws://localhost:8001');
    // this.subject = webSocket('ws://fs-rd-dev-miskyp03:9110/fdc/realtime');
    // this.subject.subscribe((msg: any) => {
    //   console.log('message received: ' + JSON.stringify(msg)); // Called whenever there is a message from the server.
    // });
  }

  connect(): void {
    // this.sc.connect('ws://localhost:8001');
    this.sc.connect('ws://fs-rd-dev-miskyp03:9110/fdc/realtime');



    // this.sc.connect('ws://fs-rd-dev-fw01:20001/ws?username=aaaa');
  }
  getState() {
    this.sc.getState();
  }
  send(data: unknown) {
    console.log('send');
    this.sc.send(data);
    // setTimeout(() => {
    //   this.subject.next(data);
    // }, 1000);

  }
  disconnect(): void {
    this.sc.close();
  }
}
