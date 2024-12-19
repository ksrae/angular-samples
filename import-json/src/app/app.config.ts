import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import data from './app.json';
import { routes } from './app.routes';

export function initApp() {
  return () => console.log({data})
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [],
      multi: true
    }
  ]
};
