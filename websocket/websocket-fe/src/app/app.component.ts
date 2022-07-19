import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { NetworkResponse, NetworkService } from './network.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'websocket-fe';
  // responseMessage$ = new Observable<NetworkResponse>();
  // responseBroadcast$ = new Observable<NetworkResponse>();

  // resWkMsg$ = new Observable<NetworkResponse>();
  // resWkbrc$ = new Observable<NetworkResponse>();
  constructor(
    // private networkService: NetworkService,
    // private workerService: WorkerService
  ) {

  }

  ngOnInit(): void {
    // this.resWkMsg$ = this.workerService.wws$.pipe(
    //   filter((response: NetworkResponse) => response.code === 0),
    //   map(response => response)
    // );

    // this.resWkbrc$ = this.workerService.wws$.pipe(
    //   filter((response: NetworkResponse) => response.code === 1),
    //   map(response => response)
    // );

    // this.responseMessage$ = this.networkService.ws$.pipe(
    //   filter((response: NetworkResponse) => response.code === 0),
    //   map(response => response)
    // );

    // this.responseBroadcast$ = this.networkService.ws$.pipe(
    //   filter((response: NetworkResponse) => response.code === 1),
    //   map(response => response)
    // );


  }

  sendMessage() {
    // this.networkService.create();
    // this.workerService.create();
  }
}
