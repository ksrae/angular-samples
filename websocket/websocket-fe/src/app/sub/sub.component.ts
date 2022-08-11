import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { NetworkResponse } from '../network.service';
import { ASocketService } from '../wa.service';
import { BSocketService } from '../wb.service';



@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubComponent implements OnInit {
  aresWkMsg$ = new Observable<NetworkResponse>();
  bresWkMsg$ = new Observable<NetworkResponse>();

  constructor(
    private aSocketService: ASocketService,
    private bSocketService: BSocketService
  ) { }

  ngOnInit(): void {
    this.aresWkMsg$ = this.aSocketService.socketResponse$;
    this.bresWkMsg$ = this.bSocketService.wws$;
    // .pipe(
    //   // filter((response: NetworkResponse) => response.code === 0),
    //   map(response => response)
    // );

  }

  connectA() {
    this.aSocketService.connect();
  }
  connectB() {
    this.bSocketService.connect();
  }

  getASocketState() {
    this.aSocketService.getState();
  }

  sendMessageA() {
    this.aSocketService.send({
      id: 1,
      text: 'aaaaaaa'
    })
  }

  getBSocketState() {
    this.bSocketService.getState();
  }

  sendMessageB() {
    this.bSocketService.send()
  }
}
