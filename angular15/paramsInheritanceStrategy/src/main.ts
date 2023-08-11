import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from "@angular/platform-browser";
import { PreloadAllModules, provideRouter, RouterModule, withDebugTracing, withPreloading, withRouterConfig } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { AppRoutes } from "./app/app.routes";


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule
    ),

    provideRouter(
      AppRoutes,
      // withPreloading options: NoPreloading, PreloadAllModules
      //https://angular.io/api/router/PreloadingStrategy
      withPreloading(PreloadAllModules),
      withRouterConfig(
        {
          /**
           * route의 파라미터를 받는 방법을 정의합니다.
           * 'emptyOnly' 자식의 파라미터가 없는 경우만 허용합니다. 만일 route에 파라미터가 포함된 경우 parent를 찾아서 접근해야 합니다.
           * 'always' route의 모든 정보를 전달 받습니다.
          */
          paramsInheritanceStrategy: 'always',
        }
      ),
      withDebugTracing()
    )
  ]
}).catch(
  err => console.error(err)
);

