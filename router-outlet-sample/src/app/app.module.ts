import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { Path1Component } from './route1/path1/path1.component';
import { Path2Component } from './route1/path2/path2.component';

import { Route2Component } from './route2/route2.component';
import { Path3Component } from './route2/path3/path3.component';
import { Path4Component } from './route2/path4/path4.component';
import { Route3Component } from './route3/route3.component';


@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component,
    Path1Component,
    Path2Component,
    Path3Component,
    Path4Component,
    Route3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
