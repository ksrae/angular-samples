import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_boost from 'highcharts/modules/boost';

HC_boost(Highcharts);

@Component({
  selector: 'app-boost',
  templateUrl: './boost.component.html',
  styleUrls: ['./boost.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoostComponent implements OnInit {
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
        seriesThreshold: 1
      },
      series: [
        {data: this.getData(100000), boostThreshole: 1},
        {data: this.getData(100), boostThreshold: 0},
      ],
      plotOptions: {
        series: {

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
    } as any)


    console.timeEnd('line');
  }
  chartLoad(e: any) {
    console.log('chartLoad', e);
  }
  chartSelection(e: any) {
    console.log('chartSelection', e);
  }
  chartAddSeries(e: any) {
    console.log('chartAddSeries', e);
  }
  chartRender(e: any) {
    console.log('chartRender', e);
  }
  chartClick(e: any) {
    console.log('chartClick', e);
  }
  chartAfterprint(e: any) {
    console.log('chartAfterprint', e);
  }
  chartRedraw(e: any) {
    console.log('chartRedraw', e);
  }
  seriesHide(e: any) {
    console.log('seriesHide', e);
  }
  seriesMouseover(e: any) {
    //console.log('seriesMouseover', e);
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

  private getData(n: number): number[][] {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push([
            i,
            2 * Math.sin(i / 100) + Math.random() * 100
        ]);
    }

    return arr;
  }

}
