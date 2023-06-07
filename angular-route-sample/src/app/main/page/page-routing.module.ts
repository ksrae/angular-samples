import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { PageComponent } from './page.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', component: PageComponent, children: [
   { path: 'first', component: FirstComponent},
   { path: 'second', component: SecondComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
