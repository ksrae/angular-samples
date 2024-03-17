import { Component, inject, ViewContainerRef, ViewChild } from '@angular/core';
import { InputTextComponent } from './input-text/input-text.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <button (click)="add()">ADD</button><br/>

    <div #here></div>
  `
})
export class AppComponent {

  title = 'create-component';
  @ViewChild('here', { read: ViewContainerRef, static: true })
  viewContainerRef!: ViewContainerRef;

  add() {
    const componentRef = this.viewContainerRef.createComponent(InputTextComponent);
    componentRef.instance.defaultName = 'test';
  }

}
