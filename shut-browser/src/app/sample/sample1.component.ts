import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sample1',
  template: '',
})
export class Sample1Component {
  title = 'shut-browser';

  @HostListener(`window:beforeunload`, [ `$event` ])
  beforeunload(e: any) {
    console.log(1);
    return false;
  }

  @HostListener(`window:pagehide`, [ `$event` ])
  pageHide(e: any) {
    e.preventDefault();
    console.log(2);
  }

}
