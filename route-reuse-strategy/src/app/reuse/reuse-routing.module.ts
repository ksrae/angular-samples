import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReuseComponent } from './reuse.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  { path: '', component: ReuseComponent },
  { path: 'test1', component: Test1Component },
  { path: 'test1/:id', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: 'test2/:id', component: Test2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReuseRoutingModule { }

