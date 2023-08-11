import { importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from "@angular/platform-browser";
import { PreloadAllModules, provideRouter, withDebugTracing, withDisabledInitialNavigation, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withPreloading, withRouterConfig } from "@angular/router";
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
      /**
       * withPreloading options: NoPreloading, PreloadAllModules
       * https://angular.io/api/router/PreloadingStrategy
       */
      withPreloading(PreloadAllModules),
      /**
       * router debuging을 콘솔에 출력한다.
       * 필요 없으면 제거
      */
      withDebugTracing(),
      /**
       * 라우터가 초기 탐색 작업을 수행하는 방법을 정의합니다.
       * 만일 일반적인 경우 둘다 사용하지 않습니다.
       * withEnabledBlockingInitialNavigation(): initial navigation은 루트 컴포넌트가 생성되기 전에 시작합니다. initial navigation이 완료될 때까지 bootstrap은 block됩니다.server-side rendering 설정 시 필수 입니다.
       * withDisabledInitialNavigation(): initial navigation이 수행되지 않습니다. 루트 컴포넌트가 생성되기 전에 location listener가 setup 됩니다. 초기 시작 시 더 많은 제거 권한을 가질 필요가 있는 경우에만 사용할 것.
       *  Use if there is a reason to have more control over when the router starts its initial navigation due to some complex initialization logic.
       */
      // withEnabledBlockingInitialNavigation(),
      // withDisabledInitialNavigation(),

      /**
       * 페이지 이동 시 스크롤을 메모리에 저장하는 옵션을 설정합니다.
      */
      withInMemoryScrolling({
        /**
         * enable인 경우 url에 fragment(#)가 있으면 해당 element로 스크롤 합니다.
         * popstate인 경우에는 발생하지 않습니다.
         * imperative vs popstate
         * imperative: 일반적으로 버튼을 눌러서 페이지를 이동할 때 url로 이동. router.navigate(), routerlink 등으로 이동하는 경우.
         * popstate: back, forward, window.history, window.go(), back(). (angular service를 사용한 go, back 함수도 포함)
        */
        anchorScrolling: 'disabled',
        /**
         * navigation이 back일 때의 설정.
         * 'disabled': 페이지에 상관없이 현재 스크롤을 유지합니다.
         * 'top': 스크롤을 가장 위로 올립니다.
         * 'enabled': 페이지를 이동했을 때의 상태로 복원합니다.
         * 예제:
         * ```typescript
         * class AppComponent {
         *   movieData: any;
         *
         *   constructor(private router: Router, private viewportScroller: ViewportScroller,
         * changeDetectorRef: ChangeDetectorRef) {
         *   router.events.pipe(filter((event: Event): event is Scroll => event instanceof Scroll)
         *     ).subscribe(e => {
         *       fetch('http://example.com/movies.json').then(response => {
         *         this.movieData = response.json();
         *         // update the template with the data before restoring scroll
         *         changeDetectorRef.detectChanges();
         *
         *         if (e.position) {
         *           viewportScroller.scrollToPosition(e.position);
         *         }
         *       });
         *     });
         *   }
         * }
         * ```
         */
        scrollPositionRestoration: 'disabled'
      }),
      /**
       * Routing 설정
      */
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

    )
  ]
}).catch(
  err => console.error(err)
);

