// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { HttpClientModule, HttpClient, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { NoPreloading, PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { appRoutes } from './app/app.routes';
import { withJsonpSupport, withXsrfConfiguration, withNoXsrfProtection } from '@angular/common/http';
import { LangService } from './app/lang.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/default/', '.json');
  }



bootstrapApplication(AppComponent, {
  providers: [
    LangService,
    {
      provide: APP_INITIALIZER,
      useFactory: (langService: LangService) => () => langService.init(),
      deps: [LangService],
      multi: true
    },
    provideHttpClient(
      // https://blog.ninja-squad.com/2022/11/09/angular-http-in-standalone-applications/
      // withJsonpSupport(),
      // withXsrfConfiguration({
      //   cookieName: 'TOKEN', // default is 'XSRF-TOKEN'
      //   headerName: 'X-TOKEN' // default is 'X-XSRF-TOKEN'
      // }),
      // withNoXsrfProtection(),
    ),
    importProvidersFrom([
      // add modules here
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      }),
    ]),
    provideRouter(
      appRoutes,
      withPreloading(NoPreloading), // NoPreloading, PreloadAllModules
      // withDebugTracing(), // routing을 debuging 한다.
      // withDisabledInitialNavigation(), // Use if there is a reason to have more control over when the router starts its initial navigation due to some complex initialization logic.
      // withEnabledBlockingInitialNavigation // The bootstrap is blocked until the initial navigation is complete. This value is required for server-side rendering to work.
      // withInMemoryScrolling( // customizable scrolling behavior for router navigations.
        // anchorScrolling?: 'disabled' | 'enabled'
        // scrollPositionRestoration?: 'disabled' | 'enabled' | 'top'
      // ),
      // withRouterConfig( // https://next.angular.io/api/router/RouterConfigOptions
      //   canceledNavigationResolution?: 'replace' | 'computed'
      //   onSameUrlNavigation?: OnSameUrlNavigation
      //   paramsInheritanceStrategy?: 'emptyOnly' | 'always'
      //   urlUpdateStrategy?: 'deferred' | 'eager'
      // )
    )
  ]
}).catch(
  err => console.error(err)
);

