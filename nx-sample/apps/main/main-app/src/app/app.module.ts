
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from 'libs/ui/welcome/src/lib/nx-welcome.component';
import { CustomTranslateHttpLoader } from 'libs/services/configuration/src/config.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    TranslateModule.forRoot({
      defaultLanguage: 'ko',
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateHttpLoader,
        // deps: [HttpClient],
      },
    }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
