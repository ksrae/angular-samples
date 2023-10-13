import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomTooltipComponent } from './tooltip-customized/tooltip-customized.component';
import { DrilldownComponent } from './drilldown/drilldown.component';
import { GetpointComponent } from './getpoint/getpoint.component';
import { LineComponent } from './line.component';
import { MarkerComponent } from './marker/marker.component';
import { MultiTooltipComponent } from './tooltip-multi/tooltip-multi.component';
import { MultixAxisComponent } from './axis/multi-xaxis/multi-xaxis.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { XaxisLinktoComponent } from './axis/xaxis-linkto/xaxis-linkto.component';
import { AxisXYComponent } from './axis/axis-xy/axis-xy.component';
import { GpuBoostComponent } from './gpu-boost/gpu-boost.component';
import { PlotLinesComponent } from './plot-lines/plot-lines.component';
import { LineDistanceComponent } from './distance/distance.component';
import { SeriesAddComponent } from './series-add/series-add.component';
import { SeriesVisibleComponent } from './series-visible/series-visible.component';
import { SeriesMultiColorComponent } from './series-multi-color/series-multi-color.component';
import { XaxisLabelComponent } from './axis/xaxis-label/xaxis-label.component';
import { AxisShiftComponent } from './axis/axis-shift/axis-shift.component';
import { AxisShift2Component } from './axis/axis-shift2/axis-shift2.component';
import { OverlayblankComponent } from './overlayblank/overlayblank.component';
import { DragPointComponent } from './drag/drag-point/drag-point.component';
import { DragPointMultiDimensionComponent } from './drag/drag-point-multi-dimension/drag-point-multi-dimension.component';
import { XaxisDateTimeComponent } from './axis/xaxis-datetime/xaxis-datetime.component';
import { AxisGroupComponent } from './axis/axis-group/axis-group.component';
import { ScrollComponent } from './scroll/scroll.component';
import { XaxisColorlComponent } from './axis/xaxis-color/xaxis-color.component';
import { ContextMenuComponent } from './contextmenu/contextmenu.component';
import { BoostComponent } from './boost/boost.component';
import { ZoomBoostComponent } from './zoom-boost/zoom-boost.component';
import { ZoomBoostAutoComponent } from './zoom-boost-auto/zoom-boost-auto.component';
import { BoostMarkerComponent } from './boost-marker/boost-marker.component';

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
    { path: 'axisgroup', component: AxisGroupComponent},
    { path: 'xaxislinkto', component: XaxisLinktoComponent},
    { path: 'xaxislabel', component: XaxisLabelComponent},
    { path: 'xaxisdatetime', component: XaxisDateTimeComponent},
    { path: 'xaxiscolor', component: XaxisColorlComponent},
    { path: 'axishift', component: AxisShiftComponent},
    { path: 'axishift2', component: AxisShift2Component},
    { path: 'plotlines', component: PlotLinesComponent},
    { path: 'distance', component: LineDistanceComponent},
    { path: 'gpuboost', component: GpuBoostComponent},
    { path: 'dragpoints', component: DragPointComponent},
    { path: 'dragpoints2', component: DragPointMultiDimensionComponent},
    { path: 'multicolor', component: SeriesMultiColorComponent},
    { path: 'overlay', component: OverlayblankComponent},
    { path: 'scroll', component: ScrollComponent},
    { path: 'contextmenu', component: ContextMenuComponent},
    { path: 'boost', component: BoostComponent},
    { path: 'boost-marker', component: BoostMarkerComponent},
    { path: 'zoom-boost', component: ZoomBoostComponent},
    { path: 'zoom-boost-auto', component: ZoomBoostAutoComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineRoutingModule { }
