import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomToPointComponent } from './dom-to-point/dom-to-point.component';
import { LineComponent } from './line.component';

const routes: Routes = [
  { path: '', component: LineComponent, children: [
    {path: '', redirectTo: 'domtopoint', pathMatch: 'full'},
    {path: 'domtopoint', component: DomToPointComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineRoutingModule { }
