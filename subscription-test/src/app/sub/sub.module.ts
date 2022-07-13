import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubRoutingModule } from './sub-routing.module';
import { SubComponent } from './sub.component';


@NgModule({
  declarations: [
    SubComponent
  ],
  imports: [
    CommonModule,
    SubRoutingModule
  ]
})
export class SubModule { }
