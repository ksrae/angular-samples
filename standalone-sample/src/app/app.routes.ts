import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RouteChildComponent } from "./route-child/route-child.component";

export const AppRoutes: Routes = [{
  path: '', component: AppComponent, children: [
    { path: 'child', component: RouteChildComponent },
    { path: 'lazy', loadChildren: () => import('./route-lazy-load/route-lazy-load.routes').then(mod => mod.RouteLazyLoadRoutes)},
    { path: 'lazy2', loadChildren: () => import('./route-lazy-load2/route-lazy-load2.routes')}
  ]
}];
