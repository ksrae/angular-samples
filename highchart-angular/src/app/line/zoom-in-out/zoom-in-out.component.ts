import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-zoom-in-out',
  templateUrl: './zoom-in-out.component.html',
  styleUrls: ['./zoom-in-out.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoomInOutComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    console.time('line');
    this.createChartLine();
  }

  private createChartLine(): void {
    this.chart = Highcharts.chart({
      chart: {
        renderTo: 'chart-line',
        type: 'line',
        zoomType: 'xy',
        animation: false,
        // resetZoomButton: {
        //   theme: {
        //     style: {
        //       zIndex: 9999,
        //     },
        //   },
        // },
        events: {
          load: (e: any) => this.chartLoad(e),
          addSeries: (e: any) => this.chartAddSeries(e),
          render: (e: any) => this.chartRender(e),
          selection: (e:any) => this.chartSelection(e),
          click: (e: any) => this.chartClick(e),
          afterPrint: (e: any) => this.chartAfterprint(e),
          redraw: (e: any) => this.chartRedraw(e)
        },
      },
      boost: {
        //allowForce: true,
        useGPUTranslations: true,
        //usePreallocated: true,
        //seriesThreshold: 1
      },

      // tooltip: {
      //   useHTML: true,
      //   formatter: (e: Highcharts.TooltipFormatterContextObject) => {
      //     console.log(e);
      //     const point = e.point;
      //     const seriesColor = point.series.color;
      //     const tooltipContent = `<div class="highcharts-tooltip" style="color: ${seriesColor};">${point.name}: ${point.y}</div>`;
      //     return tooltipContent;
      //   },
      //   zIndex: 9999,
      // },

      series: [
        {
          id: 'series1',
          data: this.getData(100000),
          boostThreshold: 1,
          marker: { enabled: false }
        },
        // {data: this.getData(100), boostThreshold: 1},
      ],
      plotOptions: {
        series: {
          marker: {enabled: false},
          animation: false,
          events: {
            hide: (e: any) => this.seriesHide(e),
            mouseOver: (e: any) => this.seriesMouseover(e),
            show: (e: any) => this.seriesShow(e),
            afterAnimate: (e: any) => this.seriesAfteranimate(e),
          },
          point: {
            events: {
              click: (e: any) => this.pointClick(e),
              drop: (e: any) => this.pointDrop(e),
              mouseOut: (e: any) => this.pointMouseout(e),
              mouseOver: (e: any) => this.pointMouseover(e),
              select: (e: any) => this.pointSelect(e)
            }
          }
        },

      }
    } as any);

    // this.chart.xAxis[0].setExtremes(0, 90);
    // setTimeout(() => {
    //   this.chart.xAxis[0].setExtremes(null, null);
    // }, 0);
    console.timeEnd('line');

  }
  setZoomIn() {
    console.log(this.chart.xAxis[0]);
    const max = this.chart.xAxis[0].max;
    this.chart.xAxis[0].setExtremes(0, max * 0.9);
    // this.chart.yAxis[0].setExtremes(0, 90);
  }
  setZoomOut() {
    const max = this.chart.xAxis[0].max;
    this.chart.xAxis[0].setExtremes(0, max * 1.1);
    // this.chart.yAxis[0].setExtremes(0, 100);
  }
  chartLoad(e: any) {
    console.log('chartLoad', e);

    const chart = this.chart ?? e.target;
  }
  chartSelection(e: any) {
    console.log('chartSelection', e);

    return false;
  }
  chartAddSeries(e: any) {
    console.log('chartAddSeries', e);

  }
  chartRender(e: any) {
    console.log('chartRender', e);
    // this.chart?.resetZoomButton?.toFront();
  }
  chartClick(e: any) {
    console.log('chartClick', e);
  }
  chartAfterprint(e: any) {``
    console.log('chartAfterprint', e);
  }
  chartRedraw(e: any) {
    console.log('chartRedraw', e);
  }
  seriesHide(e: any) {
    console.log('seriesHide', e);

  }
  seriesMouseover(e: any) {
    // console.log('seriesMouseover', e);
  }
  seriesShow(e: any) {
    console.log('seriesShow', e);

  }
  seriesAfteranimate(e: any) {
    console.log('seriesAftermate', e);
  }
  pointClick(e: any) {
    console.log('pointClick', e);
  }
  pointDrop(e: any) {
    console.log('pointDrop', e);
  }
  pointMouseout(e: any) {
    //console.log('pointMouseout', e);
  }
  pointMouseover(e: any) {
    //console.log('pointMouseover', e);
  }
  pointSelect(e: any) {
    console.log('pointSelect', e);
  }

  private getData(n: number): any {
    let arr = [];

    for (let i = 0; i < n; i++) {
      const y = 2 * Math.sin(i / 100) + Math.random() * 100;
        // arr.push({
        //   x:i,
        //   y,
        //   marker: {
        //     enabled: y > 80 ? true : false,
        //     radius: 10
        //   }
        // });
        arr.push([i, y]);
    }

    return arr;
  }
}
