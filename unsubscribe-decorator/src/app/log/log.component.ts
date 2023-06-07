import { Component, OnInit } from '@angular/core';
import { Log } from './log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  testa!: string;

  ngOnInit(): void {
      this.testa = '11111';
  }

  @Log(true)
  click() {
    let aaa = '22222';
    console.log(aaa);
  }
}
