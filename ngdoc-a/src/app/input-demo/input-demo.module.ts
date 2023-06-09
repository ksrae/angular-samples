import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { InputDemoComponent } from "./input-demo.component";


@NgModule({
  declarations: [
    InputDemoComponent
  ],
  imports: [
    CommonModule,
],
  providers: [],
  exports: [InputDemoComponent]
})
export class InputDemoModule { }
