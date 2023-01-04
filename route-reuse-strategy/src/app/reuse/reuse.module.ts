import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReuseRoutingModule } from './reuse-routing.module';
import { ReuseComponent } from './reuse.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';


@NgModule({
  declarations: [
    ReuseComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    ReuseRoutingModule
  ]
})
export class ReuseModule { }
