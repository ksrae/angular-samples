import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { WorkerController } from "src/assets/worker/worker.controller";
import { NetworkResponse } from "./network.service";

@Injectable({
  providedIn: 'root'
})
export class BSocketService {
  // wk = new Worker('/assets/worker/network-worker.js');
  wws$ = new Observable<NetworkResponse>();
  wc = new WorkerController('ws://localhost:8002');

  constructor(
  ) {
    this.wws$ = this.wc.message$ as Observable<NetworkResponse>;
  }


  connect(): void {
    this.wc.connect('ws://localhost:8001');
  }
  getState() {
    this.wc.getState();
  }
  send() {
    this.wc.send(
      {
        id: 2,
        text: 'aaaaaaa'
      }
    );
  }
}
