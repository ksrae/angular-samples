import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ButtonDemoComponent } from './button-demo.component';
import { NgDocButtonComponent } from '@ng-doc/ui-kit';


@NgModule({
  declarations: [
    ButtonDemoComponent,

  ],
  imports: [
    CommonModule,
    NgDocButtonComponent
],
  providers: [],
  exports: [ButtonDemoComponent]
})
export class ButtonDemoModule { }
