import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CountService } from './services/count/count.service';
import { MessageService } from './services/message/message.service';
import { Message } from './services/message/message.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngxs-decorator';
  totalCount$!: Observable<number>;
  messages$!: Observable<Message[]>;

  constructor(
    private countService: CountService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.messageService.connect();
    this.totalCount$ = this.countService.totalCount$;
    this.messages$ = this.messageService.messages$;
  }

  increment() {
    this.countService.increment();
  }

  setCount() {
    this.countService.setCount(0);
  }

  sendMessage() {
    this.messageService.sendMessage('from11', 'message22');
  }
}
