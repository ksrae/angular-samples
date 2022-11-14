import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockInterceptor } from './mock-http-interceptor';
import { MyErrorHandler } from './my-error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    // {
    //   multi: true,
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: MockInterceptor,
    // },
    // {
    //   provide: ErrorHandler,
    //   useClass: MyErrorHandler
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
