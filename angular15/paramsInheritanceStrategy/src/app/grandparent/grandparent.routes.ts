import { Routes } from "@angular/router";
import { GrandparentComponent } from './grandparent.component';

export const GrandRoutes: Routes = [
  { path: '', component: GrandparentComponent, children: [
    { path: 'parent/:name', loadChildren: () => import('./parent/parent.routes').then(mod => mod.ParentRoutes)}
  ]}
];
