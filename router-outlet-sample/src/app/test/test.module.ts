import { TestService } from './test/test.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { NewTestService } from './test/newtest.service';



@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestComponent
  ],
  providers: [
    {provide: 'ACTIVE', useValue: true},
    {
      provide: 'FUNC',
      useFactory: () => {
        return 'hello';
      }
    },
    TestService,
    // NewTestService,
    {provide: NewTestService, useExisting: TestService },
  ]
})
export class TestModule { }
