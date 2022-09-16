import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';
import { DrilldownComponent } from './drilldown/drilldown.component';
import { GetpointComponent } from './getpoint/getpoint.component';
import { LineComponent } from './line.component';
import { MarkerComponent } from './marker/marker.component';
import { MultiTooltipComponent } from './multi-tooltip/multi-tooltip.component';
import { MultixAxisComponent } from './axis/multi-xaxis/multi-xaxis.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { XaxisLinktoComponent } from './axis/xaxis-linkto/xaxis-linkto.component';
import { AxisXYComponent } from './axis/axis-xy/axis-xy.component';
import { GpuBoostComponent } from './gpu-boost/gpu-boost.component';
import { PlotLinesComponent } from './plot-lines/plot-lines.component';
import { LineDistanceComponent } from './distance/distance.component';
import { SeriesAddComponent } from './series-add/series-add.component';
import { SeriesVisibleComponent } from './series-visible/series-visible.component';
import { DragBackgroundComponent } from './drag-background/drag-background.component';
import { SeriesMultiColorComponent } from './series-multi-color/series-multi-color.component';
import { XaxisLabelComponent } from './axis/xaxis-label/xaxis-label.component';
import { AxisShiftComponent } from './axis/axis-shift/axis-shift.component';
import { AxisShift2Component } from './axis/axis-shift2/axis-shift2.component';

const routes: Routes = [
  { path: '', component: LineComponent, children: [
    { path: 'tooltip', component: TooltipComponent},
    { path: 'getpoint', component: GetpointComponent},
    { path: 'marker', component: MarkerComponent},
    { path: 'drilldown', component: DrilldownComponent},
    { path: 'seriesadd', component: SeriesAddComponent},
    { path: 'seriesvisible', component: SeriesVisibleComponent},
    { path: 'customtooltip', component: CustomTooltipComponent},
    { path: 'multitooltip', component: MultiTooltipComponent},
    { path: 'axis', component: AxisXYComponent},
    { path: 'multixaxis', component: MultixAxisComponent},
    { path: 'xaxislinkto', component: XaxisLinktoComponent},
    { path: 'xaxislabel', component: XaxisLabelComponent},
    { path: 'axishift', component: AxisShiftComponent},
    { path: 'axishift2', component: AxisShift2Component},
    { path: 'plotlines', component: PlotLinesComponent},
    { path: 'distance', component: LineDistanceComponent},
    { path: 'boost', component: GpuBoostComponent},
    { path: 'dragbg', component: DragBackgroundComponent},
    { path: 'multicolor', component: SeriesMultiColorComponent},

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineRoutingModule { }
