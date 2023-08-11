import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent.component';
import { Routes } from "@angular/router";

export const ParentRoutes: Routes = [
  { path: '', component: ParentComponent, children: [
    { path: 'child/:index', component: ChildComponent }
  ]}
];
