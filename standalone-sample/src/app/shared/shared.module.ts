import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    ReactiveFormsModule,
    TranslateModule,
    SharedComponent
  ]
})
export class SharedModule {}
