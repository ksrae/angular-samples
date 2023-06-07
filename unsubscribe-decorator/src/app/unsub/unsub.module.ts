import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsubRoutingModule } from './unsub-routing.module';
import { UnsubComponent } from './unsub.component';


@NgModule({
  declarations: [
    UnsubComponent
  ],
  imports: [
    CommonModule,
    UnsubRoutingModule
  ]
})
export class UnsubModule { }
