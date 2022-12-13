import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RouteChildComponent } from "./route-child/route-child.component";

export const AppRoutes: Routes = [{
  path: '', children: [
    { path: 'child', component: RouteChildComponent },
    { path: 'lazy', loadChildren: () => import('./route-lazy-load/route-lazy-load.routes').then(mod => mod.RouteLazyLoadRoutes)}, // or set component , to call component then can be skipped.
    { path: 'lazy2', loadChildren: () => import('./route-lazy-load2/route-lazy-load2.routes')}
  ]
}];
