import { Component } from '@angular/core';
import { first, Observable, tap } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'switchmap-http';
  val$!: Observable<any>;
  val2$!: Observable<any>;

  constructor(
    private appService: AppService
  ) {}

  call() {
    console.log('call');
    this.val$ = this.appService.get().pipe(
      tap(res => console.log({res}))
    );
  }

  post() {
    console.log('call');
    this.val2$ = this.appService.post().pipe(
      tap(res => console.log({res}))
    );
  }

  login() {
    this.appService.login().pipe(
      first(),
      tap(a => console.log({a}))
    ).subscribe();
  }
}
