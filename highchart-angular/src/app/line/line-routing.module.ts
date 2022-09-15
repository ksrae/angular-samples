import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSeriesComponent } from './add-series/add-series.component';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';
import { DrilldownComponent } from './drilldown/drilldown.component';
import { GetpointComponent } from './getpoint/getpoint.component';
import { LineComponent } from './line.component';
import { MarkerComponent } from './marker/marker.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [
  { path: '', component: LineComponent, children: [
    { path: 'tooltip', component: TooltipComponent},
    { path: 'getpoint', component: GetpointComponent},
    { path: 'marker', component: MarkerComponent},
    { path: 'drilldown', component: DrilldownComponent},
    { path: 'addseries', component: AddSeriesComponent},
    { path: 'customtooltip', component: CustomTooltipComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineRoutingModule { }
