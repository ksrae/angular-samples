import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { importProvidersFrom } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import {

  PlusOutline

} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [

  PlusOutline,
];

export const AppRoutes: Routes = [{
  path: '', children: [
    {
      path: 'treeview',
      providers: [
        importProvidersFrom(
          NzIconModule.forChild(icons)
        ),
      ],
      loadComponent: () => import('./treeview/treeview.component').then(m => m.TreeviewComponent),
    }
    // { path: 'child', component: RouteChildComponent },
    // { path: 'lazy', loadChildren: () => import('./route-lazy-load/route-lazy-load.routes').then(mod => mod.RouteLazyLoadRoutes)},
    // { path: 'lazy2', loadChildren: () => import('./route-lazy-load2/route-lazy-load2.routes')},
		// { path: 'lazy3', loadChildren: () => import('../route-lazy-load3/route-lazy-load3.component').then(m => m.RouteLazyLoad3Component)}
  ]
}];
