# ParamsInheritanceStrategy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

# Standalone

## Module

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "standalone-sample": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss",
          "standalone": true
        }
      },
```

## main.ts

```tsx
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from "@angular/platform-browser";
import { PreloadAllModules, provideRouter, RouterModule, withDebugTracing, withPreloading, withRouterConfig } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { AppRoutes } from "./app/app.routes";


import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from "@angular/platform-browser";
import { PreloadAllModules, provideRouter, RouteReuseStrategy, RouterModule, withDebugTracing, withDisabledInitialNavigation, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withPreloading, withRouterConfig } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { AppRoutes } from "./app/app.routes";
import { provideHttpClient } from "@angular/common/http";



// a real case of standalone main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
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
    withPreloading(PreloadAllModules),
    withDebugTracing(),
    // withDisabledInitialNavigation(), // 라우터가 초기 탐색을 시작하지 않도록 합니다. 이럴 경우 제어가 많이 필요합니다. 추천하지 않음.
    withEnabledBlockingInitialNavigation(), // SSR일 때 필수 입니다. 시작 navigation이 완료될 때까지 bootstrap하지 않습니다.
    withInMemoryScrolling({
      anchorScrolling: 'enabled', // disabled가 기본 값입니다. enabled이면 url에 fragment로 스크롤 합니다. anchor scroll은 'popstate'가 발생하지 않습니다. 저장된 포지션으로 복구하거나 top으로 이동합니다.
      scrollPositionRestoration: 'disabled' // 기본은 disabled 입니다. 스크롤에 대한 아무것도 하지 않습니다. 'top' 모든 navigation에 top으로 이동합니다. 'enabled' 뒤로가기 하면 이전 scroll 포지션을 유지합니다. anchor가 있으면 해당 포지션으로 가며 그렇지 않으면 top으로 갑니다.
    }),
    withRouterConfig(
      {
        /**
         * route의 파라미터를 받는 방법을 정의합니다.
         * 'emptyOnly' 자식의 파라미터가 없는 경우만 허용합니다. 만일 route에 파라미터가 포함된 경우 parent를 찾아서 접근해야 합니다.
         * 'always' route의 모든 정보를 전달 받습니다.
        */
        paramsInheritanceStrategy: 'always',
        onSameUrlNavigation: 'reload',
        urlUpdateStrategy: 'deferred', // 'deferred' | 'eager';
        canceledNavigationResolution: 'replace' // 'replace' | 'computed';
      }
    ),
    Title,
    { provide: LOCALE_ID, useClass: LocaleId },
    { provide: RouteReuseStrategy, useClass: RouteReuseService },
    { provide: TitleStrategy, useClass: CricketTitleStrategy },
    { provide: APP_BASE_HREF, useClass: RootHref }
       // ... other stuff like APP_INITIALIZER, HTTP_INTERCEPTORS...
  ],
}).catch(
  err => console.error(err)
);


```

## remove files
app-routing.module.ts, app.module.ts 제거

## add files
app.routes.ts 추가

```tsx
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RouteChildComponent } from "./route-child/route-child.component";

export const AppRoutes: Routes = [{
  path: '', component: AppComponent, children: [
    { path: 'child', component: RouteChildComponent },
    { path: 'lazy', loadChildren: () => import('./route-lazy-load/route-lazy-load.routes').then(mod => mod.RouteLazyLoadRoutes)},
    { path: 'lazy2', loadChildren: () => import('./route-lazy-load2/route-lazy-load2.routes')},
    { path: 'lazy3', loadChildren: () => import('../route-lazy-load3/route-lazy-load3.component').then(m => m.RouteLazyLoad3Component)}
  ]
}];
```

route-lazy-load.routes.ts 추가
> Routes 변수를 선언한다. AppRoutes는 선언된 변수를 promise에 적용한다.

```tsx
import { Routes } from "@angular/router";
import { RouteLazyLoadComponent } from "./route-lazy-load.component";

export const RouteLazyLoadRoutes: Routes = [
  { path: '', component: RouteLazyLoadComponent }
];
```

route-lazy-load2.routes.ts 추가
> 변수명이 없는(default) Route를 export한다. AppRoutes는 promise 없이 링크만 import한다.
```tsx
import { RouteLazyLoad2Component } from "./route-lazy-load2.component";

export default [
  { path: '', component: RouteLazyLoad2Component }
];
```

route-lazy-load3.component.ts 추가
> 별도의 route 파일 없이 직접 component에 접근한다. 하위 route가 없으면 이렇게 구현하는 것이 추가 코드가 없으므로 쉽다.



https://this-is-angular.github.io/angular-guides/docs/standalone-apis/adding-top-level-routes-to-a-standalone-angular-application


# boostrapApplication에서 providers 옵션
## with 옵션 목록
