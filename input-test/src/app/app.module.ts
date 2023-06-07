import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputaComponent } from './inputa/inputa.component';
import { InputbComponent } from './inputb/inputb.component';

@NgModule({
  declarations: [
    AppComponent,
    InputaComponent,
    InputbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
