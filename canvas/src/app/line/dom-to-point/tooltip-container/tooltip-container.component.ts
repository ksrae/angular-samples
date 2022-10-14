import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Input, AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, Output, EventEmitter, ContentChild, ElementRef, OnInit, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { TooltipControl, TooltipPosition } from '../tooltip.interface';


@Component({
  selector: 'tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipContainerComponent implements OnInit, OnDestroy {
  @Input() position!: TooltipPosition;

  closeEvent$ = new Subject<TooltipControl>();
  isOpen$ = new BehaviorSubject<boolean>(true);
  pinned$ = new BehaviorSubject<boolean>(false);

  closeSubscription = new Subscription();
  constructor() {

  }

  ngOnInit(): void {
    this.closeSubscription = this.closeEvent$.subscribe(e => {
      console.log({e});
      if(e.isClose) {
        if(e.force || !this.pinned$.getValue()) {
          console.log('forcy');
          this.setClose();
          this.setPin(false);
        }
      }

    })
  }

  setClose() {
    this.isOpen$.next(false);
  }
  setPin(e: boolean) {
    this.pinned$.next(e);
  }

  ngOnDestroy() {
    this.closeSubscription?.unsubscribe();
  }
}
