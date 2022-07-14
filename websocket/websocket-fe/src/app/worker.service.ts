import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { NetworkResponse } from "./network.service";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  wk = new Worker('../assets/worker/worker.js');
  wws$ = new Subject<NetworkResponse>();

  constructor() {
    this.wk.postMessage('');

    this.wk.onmessage = (e: any) => {
      if(e.data.result === 'success') {

        this.wws$.next(e.data);
      } else if(e.data.result === 'close') {
        this.wws$.next(
          {
            result: 'close',
            code: 999,
            data: 'close'
          }
        );
      }
    }
  }

  create() {
    this.wk.postMessage('');
  }
}
