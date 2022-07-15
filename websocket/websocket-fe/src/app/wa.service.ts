import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { WorkerController } from "src/assets/worker/worker.controller";
import { NetworkResponse } from "./network.service";

@Injectable({
  providedIn: 'root'
})
export class ASocketService {
  // wk = new Worker('/assets/worker/network-worker.js');
  wws$ = new Observable<NetworkResponse>();
  wc = new WorkerController();

  constructor(

  ) {

    this.wws$ = this.wc.message$ as Observable<NetworkResponse>;

    // this.wk.onmessage = (e: any) => {
    //   console.log('received from worker', {e});
    // //   if(e.data.result === 'success') {

    //   this.wws$.next(e.data);
    // //   } else if(e.data.result === 'close') {
    // //     this.wws$.next(
    // //       {
    // //         result: 'close',
    // //         code: 999,
    // //         data: 'close'
    // //       }
    // //     );
    // //   }
  }


  connect(): void {
    this.wc.connect('ws://localhost:8001');
    // this.wk.postMessage({
    //   type: 'connect',
    //   data: websocketUrl
    // })
  }
  getState() {
    this.wc.getState();
    // this.wk.postMessage({
    //   type: 'state',
    //   data: ''
    // })
  }
  send(data: unknown) {
    this.wc.send(data);
    // this.wk.postMessage(
    //   { type: 'send',
    //     data
    //   }
    // );
  }
}
