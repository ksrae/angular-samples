import { importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from "@angular/platform-browser";
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading, withRouterConfig } from "@angular/router";
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
      // withPreloading options: NoPreloading, PreloadAllModules
      //https://angular.io/api/router/PreloadingStrategy
      withPreloading(PreloadAllModules),
      withRouterConfig(
        {
          /**
           * 뒤로가기 할 때 앞으로 가기를 대응하기 위해 세션에 상태를 등록하고, 이를 활용하려면 'computed'를 사용한다.
           * 단, 이 경우 UrlHandlingStrategy와 호환되지 않는다.
           * 기본 값은 'replace'로 세션 위치로 복원하지 않고 변경된 상태를 호출한다.
          */
          canceledNavigationResolution: 'replace',
          /**
           * 같은 URL을 호출할 경우 'reload' 또는 'ignore'를 결정.
          */
          onSameUrlNavigation: 'ignore',
          /**
           * route의 파라미터를 받는 방법을 정의합니다.
           * 'emptyOnly' 자식의 파라미터가 없는 경우만 허용합니다. 만일 route에 파라미터가 포함된 경우 parent를 찾아서 접근해야 합니다.
           * 'always' route의 모든 정보를 전달 받습니다.
          */
          paramsInheritanceStrategy: 'emptyOnly',
          /**
           * 브라우저의 URL 업데이트 시점을 정의 합니다.
           * 'eager' 는 navigation 시작 시점에 업데이트 합니다. 이 때, 만일 실패할 경우 에러 메시지가 표시됩니다.
          */
          urlUpdateStrategy: 'deferred',
        }
      ),
      withDebugTracing()
    )
  ]
}).catch(
  err => console.error(err)
);

