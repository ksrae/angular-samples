import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_boost from 'highcharts/modules/boost';
import { BehaviorSubject } from 'rxjs';

HC_boost(Highcharts);

@Component({
  selector: 'app-zoom-boost-auto',
  templateUrl: './zoom-boost-auto.component.html',
  styleUrls: ['./zoom-boost-auto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoomBoostAutoComponent implements OnInit {
  chart!: Highcharts.Chart;
  chartBoosted$ = new BehaviorSubject<'Boost' | 'Mix' | 'Normal'>('Mix');
  isZoomed: boolean = false;

  options = {
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

    },
    series: [
      {data: this.getData(100000), boostThreshold: 2000},
      {data: this.getData(1000), boostThreshold: 2000},
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
  } as any;

  ngOnInit(): void {
    console.time('line');
    this.createChartLine(this.options);
  }

  private createChartLine(options: any): void {
    this.chart = Highcharts.chart(options);
    const boosted = options.series?.filter((series: any) => series.boostThreshold);
    this.chartBoosted$.next(!boosted.length ? 'Normal' : boosted.length === options.series.length ? 'Boost': 'Mix');
    console.timeEnd('line');
    console.log(this.chart);
  }
  addSeries() {
    this.chart.addSeries({
      data: this.getData(10000), boostThreshold: 2000, type: 'line'
    })
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

    const boosted = e.target.series.filter((series: any) => series.boosted === true);
    console.log({boosted})
    this.chartBoosted$.next(!boosted.length ? 'Normal' : boosted.length === e.target.series.length ? 'Boost': 'Mix');
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
    console.log('seriesMouseover', e);
    console.log(e.target.boosted);
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
