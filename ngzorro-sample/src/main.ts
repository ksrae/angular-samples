import { bootstrapApplication } from "@angular/platform-browser";
import { AppRoutes } from "./app/app.routes";
import { AppComponent } from "./app/app.component";
import { provideHttpClient } from '@angular/common/http';
import { PreloadAllModules, provideRouter, withDebugTracing, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withPreloading, withRouterConfig } from "@angular/router";
import { provideAnimations } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { importProvidersFrom } from '@angular/core';

// Import what you need. RECOMMENDED. ✔️
import {  PlusOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [  PlusOutline ];

bootstrapApplication
(AppComponent,
 {

  providers:[
    importProvidersFrom(
      NzIconModule.forRoot(icons),
    ),
		provideHttpClient(),
    provideAnimations(),
		// pass the routes from existing RouteModule
		// with로 구현하거나 RouterModule.forRoot로 구현하거나 선택할 수 있다.
		// importProvidersFrom(
		//   RouterModule.forRoot(AppRoutes, {
		//     preloadingStrategy: PreloadService,
		//     paramsInheritanceStrategy: 'always',
		//     onSameUrlNavigation: 'reload',
		//     scrollPositionRestoration: 'disabled',
		//     initialNavigation: 'enabledBlocking'
		//   })
		// ),

    // RouteModule.forRoot는 다음과 같이 구성할 수 있다.


    provideRouter(AppRoutes,
      withPreloading(PreloadAllModules),
      withDebugTracing(),
      // withDisabledInitialNavigation(), // 라우터가 초기 탐색을 시작하지 않도록 합니다. 이럴 경우 제어가 많이 필요합니다. 추천하지 않음.
		  // withEnabledBlockingInitialNavigation(), // SSR일 때 필수 입니다. 시작 navigation이 완료될 때까지 bootstrap하지 않습니다.
      withInMemoryScrolling({
        anchorScrolling:'enabled', // disabled가 기본 값입니다. enabled이면 url에 fragment로 스크롤 합니다. anchor scroll은 'popstate'가 발생하지 않습니다. 저장된 포지션으로 복구하거나 top으로 이동합니다.
        scrollPositionRestoration:'disabled' // 기본은 disabled 입니다. 스크롤에 대한 아무것도 하지 않습니다. 'top' 모든 navigation에 top으로 이동합니다. 'enabled' 뒤로가기 하면 이전 scroll 포지션을 유지합니다. anchor가 있으면 해당 포지션으로 가며 그렇지 않으면 top으로 갑니다.
      }),
      withRouterConfig({
        /**
         * route의 파라미터를 받는 방법을 정의합니다.
         * 'emptyOnly' 자식의 파라미터가 없는 경우만 허용합니다. 만일 route에 파라미터가 포함된 경우 parent를 찾아서 접근해야 합니다.
         * 'always' route의 모든 정보를 전달 받습니다.
        */
        paramsInheritanceStrategy: 'always',
        onSameUrlNavigation: 'reload',
        urlUpdateStrategy: 'deferred', // 'deferred' | 'eager';
        canceledNavigationResolution: 'replace' // 'replace' | 'computed';
    })
   )

  // ... other stuff like APP_INITIALIZER, HTTP_INTERCEPTORS...
  ],
}).catch(err => console.error(err));
