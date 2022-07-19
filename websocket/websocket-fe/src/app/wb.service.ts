import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SocketController } from "src/core/worker/socket.controller";
import { NetworkResponse } from "./network.service";

@Injectable({
  providedIn: 'root'
})
export class BSocketService {
  wws$ = new Observable<NetworkResponse>();
  sc = new SocketController('ws://localhost:8002');

  constructor(
  ) {
    this.wws$ = this.sc.message$ as Observable<NetworkResponse>;
  }


  connect(): void {
    this.sc.connect('ws://localhost:8001');
  }
  getState() {
    this.sc.getState();
  }
  send() {
    this.sc.send(
      {
        id: 2,
        text: 'aaaaaaa'
      }
    );
  }
}
