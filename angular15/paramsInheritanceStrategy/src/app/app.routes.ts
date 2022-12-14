import { Routes } from "@angular/router";

export const AppRoutes: Routes = [{
  path: '', children: [
    { path: 'grandparent/:id', loadChildren: () => import('./grandparent/grandparent.routes').then(mod => mod.GrandRoutes)}
  ]
}];
