import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // host: {
  //   '(window:unload)': 'unload($event)',
  //   '(window:beforeunload)': 'beforeunload($event)',
  //   '(document:visibilitychanges)': 'visibilitychanges($event)'
  // }
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'shut-browser';

  /*
  1.
  unload는 사용하지 않을 것을 권고. 링크 참조

  2.
  @HostListener(`window:pagehide`, [ `$event` ])
    return false나 e.preventDefault() 로 멈출 수 없음.
    그냥 event가 실행될 뿐 중간에 멈출 수 없다.
    refresh일 때는 동작한다.


  3.
  @HostListener(`window:beforeunload`, [ `$event` ])
    return false로 멈출 수 있음
    그러나 브라우저 confirm을 수정할 수 없음.
    beforeunload가 실행되면 pagehide가 실행되지 않음.
    그러나 refresh일 때는 beforeunload가 동작하고, true이면 pagehide가 실행됨.
    return이 동작하는 조건 1. return false; 2. return e.returnValue = '(anyvalue)'.


  4.
  @HostListener('window:beforeunload', ['$event'])
  ngOnDestroy() {
  }
  이렇게 표현하면 beforeunload 시에 ondestroy 처리까지도 할 수 있으므로 이 방법이 가장 효과적인 듯.
  하지만 여전히 confirm을 구현할 수 없음.


  2,3,4 공통
  한 번 새로고침하면 그 뒤로 닫으면 다시 이벤트가 발생하지 않음
  */

  // https://web.dev/bfcache/#only-add-beforeunload-listeners-conditionally
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
  // https://okky.kr/articles/393968
  // https://stackoverflow.com/questions/70637104/window-onunload-onbeforeunload-events-dont-work


  // unload는 사용하지 않을 것을 권고. 링크 참조
  // @HostListener('window:unload', ['$event'])
  // unload(e: any) {
  //   console.log('unload');
  //   console.log(e);
  //   if(window.confirm('unload')) {
  //     console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!');
  //   }
  //   // return false;
  // }



  @HostListener(`window:pagehide`, [ `$event` ])
  pageHide(e: any) {
    // return false나 e.preventDefault() 로 멈출 수 없음.
    // 그냥 event가 실행될 뿐 중간에 멈출 수 없다.
    // refresh일 때는 동작한다.
    e.preventDefault();
    console.log('pagehide');
    // alert('bbb');
    // alert('bbb');
    return false;
  }

  @HostListener(`window:beforeunload`, [ `$event` ])
  beforeunload(e: any) {
    console.log('beforeunload')
    // return false로 멈출 수 있음
    // 그러나 브라우저 confirm을 수정할 수 없음.
    // beforeunload가 실행되면 pagehide가 실행되지 않음.
    // 그러나 refresh일 때는 beforeunload가 동작하고, true이면 pagehide가 실행됨.
    // return이 동작하는 조건 1. return false; 2. return e.returnValue = '(anyvalue)'.

    // e.preventDefault();


    return false;
  }

  // @HostListener('document:visibilitychange', ['$event'])
  // visibilitychanges() {
  //   console.log('visibilitychanges');
  //   console.log(document.visibilityState);
  //   return false;
  // }

  ngOnInit() {
    console.log('oninit1');
  }

  // 이렇게 표현하면 beforeunload 시에 ondestroy 처리까지도 할 수 있으므로 이 방법이 가장 효과적인 듯.
  // 하지만 여전히 confirm을 구현할 수 없음.
  // 한 번 새로고침하면 그 뒤로 닫으면 다시 이벤트가 발생하지 않음
  // @HostListener('window:beforeunload')
  ngOnDestroy() {
  // //   console.log('destroy');
  // //   // confirm('aaa');

  // //   // return false;

  // //   // if(confirm('are you sure')) {
  // //   //   console.log('true');
  // //   //   // return false;
  // //   // } else {
  // //   //   console.log('false');

  // //   // }
  //   return false;
  }
}
