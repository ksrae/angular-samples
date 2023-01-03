import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IsInAngularZoneComponent } from './is-in-angular-zone/is-in-angular-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    IsInAngularZoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
