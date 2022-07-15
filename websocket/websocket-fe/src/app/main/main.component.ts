import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { NetworkResponse } from '../network.service';
import { ASocketService } from '../wa.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  resWkMsg$ = new Observable<NetworkResponse>();

  constructor(
    private aSocketService: ASocketService
  ) { }

  ngOnInit(): void {
    this.resWkMsg$ = this.aSocketService.wws$;
    // .pipe(
    //   // filter((response: NetworkResponse) => response.code === 0),
    //   map(response => response)
    // );


  }

  connect() {
    this.aSocketService.connect();
  }

  getSocketState() {
    this.aSocketService.getState();
  }

  sendMessage() {
    this.aSocketService.send({
      id: 1,
      text: 'aaaaaaa'
    })
  }
}
