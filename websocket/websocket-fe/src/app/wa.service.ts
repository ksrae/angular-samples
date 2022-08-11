import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { SocketController } from "src/core/worker/socket.controller";
import { NetworkResponse } from "./network.service";

@Injectable({
  providedIn: 'root'
})
export class ASocketService {
  socketResponse$ = new Observable<NetworkResponse>();
  sc = new SocketController();

  constructor() {
    this.socketResponse$ = this.sc.message$.pipe(
      map(message => message)
    ) as Observable<NetworkResponse>;
  }


  connect(): void {
    this.sc.connect('ws://localhost:8001');
    // this.sc.connect('ws://fs-rd-dev-fw01:20001/ws?username=aaaa');
  }
  getState() {
    this.sc.getState();
  }
  send(data: unknown) {
    this.sc.send(data);
  }
  disconnect(): void {
    this.sc.close();
  }
}
