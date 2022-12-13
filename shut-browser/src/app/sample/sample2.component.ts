import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sample2',
  template: '',
})
export class Sample2Component implements OnDestroy {
  title = 'shut-browser';

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    console.log('destroy');
    return false;
  }
}
