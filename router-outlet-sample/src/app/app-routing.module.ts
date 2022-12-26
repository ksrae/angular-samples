import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Path1Component } from './route1/path1/path1.component';
import { Path2Component } from './route1/path2/path2.component';
import { Route2Component } from './route2/route2.component';
import { Path3Component } from './route2/path3/path3.component';
import { Path4Component } from './route2/path4/path4.component';
import { Route3Component } from './route3/route3.component';

const routes: Routes = [
  { path: '', children: [
    {path: 'path1', component: Route1Component, children: [
      {path: 'path-first', component: Path1Component, outlet: 'route1'},
      {path: 'path-second', component: Path2Component, outlet: 'route1'},
    ]},
    {path: 'path2', component: Route2Component, children: [
      {path: 'path-third', component: Path3Component, outlet: 'route2'},
      {path: 'path-fourth', component: Path4Component, outlet: 'route2'},
    ]},
    {path: 'path3', component: Route3Component, outlet: 'route1'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
