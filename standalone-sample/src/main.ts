import { importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from "@angular/platform-browser";
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { AppRoutes } from "./app/app.routes";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // from angular 15
    importProvidersFrom(
      // HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        },
        defaultLanguage: 'en'
      }),
    ),

    provideRouter(
      AppRoutes,
      withPreloading(PreloadAllModules),
      withDebugTracing()
    )
  ]
}).catch(
  err => console.error(err)
);
