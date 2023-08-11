import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container/tooltip-container.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@Component({
  selector: 'app-dom-to-point',
  templateUrl: './dom-to-point.component.html',
  styleUrls: ['./dom-to-point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DomToPointComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ViewChild('area', {
    read: ViewContainerRef
  }) viewContainerRef!: ViewContainerRef



  mode: string = 'single';

  componentList: any[] = [];

  constructor(
    // public viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {
    // this.drawLine();
  }


  createTooltip(from: number[]) {
    console.log('mode', this.mode);

    if(this.mode === 'single') {
      this.clearTooltip();
    }

    const componentRef = this.viewContainerRef.createComponent<TooltipContainerComponent>(TooltipContainerComponent);
    componentRef.instance.position = {
      from
    }

    this.componentList.push(componentRef);
  }

  setMode(value: 'single' | 'multi' | any) {
    this.mode = value;

    this.clearTooltip(value === 'single' || value === 'multi');

  }

  clearTooltip(keepPinned:boolean = true) {
    for(let com of this.componentList) {
      com.instance.closeEvent$.next({isClose: true, force: !keepPinned});
      // com.instance.isClose = false;
      console.log('pinned', com.instance.pinned$.getValue());
    }

    this.componentList = this.componentList.filter(com => com.instance.isOpen$.getValue() === true && com.instance.pinned$.getValue() === true);

    console.log(this.componentList);
  }



}
