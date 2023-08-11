import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Path1Component } from './path1/path1.component';
import { Path2Component } from './path2/path2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { MatcherComponent } from './matcher/matcher.component';

@NgModule({
  declarations: [
    AppComponent,
    Path1Component,
    Path2Component,
    ParentComponent,
    ChildComponent,
    MatcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
