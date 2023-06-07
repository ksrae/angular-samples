import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElementAutoFocusDirective } from './element-auto-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    ElementAutoFocusDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
