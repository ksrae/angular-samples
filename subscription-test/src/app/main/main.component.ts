import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  title = 'subscription-test';
  subscription = new Subscription();

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appService.init();

    // O no return required
    this.subscription.add(
      this.appService.test1$.pipe(
        tap(() => console.log('test1$ tested'))
      ).subscribe()
    );

    // O must return subscription
    this.subscription.add(
      this.test2()
    );

    // X
    this.subscription.add(
      this.test3
    );

    // O
    this.subscription.add(
      this.test3()
    );
  }

  // 함수에 넣으려면 반드시 리턴해야 한다.
  test2(): Subscription {
    return this.appService.test2$.pipe(
      tap(() => console.log('test2$ tested'))
    ).subscribe()
  }

  // ARROW 함수에 넣어도 동작함. 다만 add 시 함수 형태로 호출해야함. 변수 형태로 호출하면 최초 접근 시 인식 불가. subscription에 태울 수 없음.
  test3 = (): Subscription => {
    return this.appService.test3$.pipe(
      tap(() => console.log('test3$ tested'))
    ).subscribe()
  }

  ngOnDestroy(): void {
    console.log('destroyed');
    this.subscription?.unsubscribe();
  }

}
