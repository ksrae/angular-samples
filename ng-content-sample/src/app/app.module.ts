import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentOneComponent } from './content-one/content-one.component';
import { ContentOneChildComponent } from './content-one/content-one-child/content-one-child.component';
import { ContentMultiComponent } from './content-multi/content-multi.component';
import { ContentMultiChildComponent } from './content-multi/content-multi-child/content-multi-child.component';
import { ContentConditionalComponent } from './content-conditional/content-conditional.component';
import { ContentConditionalChildComponent } from './content-conditional/content-conditional-child/content-conditional-child.component';
import { ContentConditionalDirective } from './content-conditional/content-conditional.directive';
import { ContentComplexComponent } from './content-complex/content-complex.component';
import { ContentComplexChildComponent } from './content-complex/content-complex-child/content-complex-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentOneComponent,
    ContentOneChildComponent,
    ContentMultiComponent,
    ContentMultiChildComponent,
    ContentConditionalComponent,
    ContentConditionalChildComponent,
    ContentConditionalDirective,
    ContentComplexComponent,
    ContentComplexChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
