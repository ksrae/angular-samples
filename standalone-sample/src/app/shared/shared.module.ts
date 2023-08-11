import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";



@NgModule({
  declarations: [

  ],
  imports: [
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class SharedModule {}
