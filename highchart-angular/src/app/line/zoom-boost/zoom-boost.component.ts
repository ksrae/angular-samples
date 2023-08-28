import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_boost from 'highcharts/modules/boost';
import { BehaviorSubject } from 'rxjs';

HC_boost(Highcharts);

@Component({
  selector: 'app-zoom-boost',
  templateUrl: './zoom-boost.component.html',
  styleUrls: ['./zoom-boost.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZoomBoostComponent implements OnInit {
  chart: any;
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
      seriesThreshold: 1
    },
    series: [
      {data: this.getData(100000), boostThreshold: this.setBoostThreshold(100000)},
      {data: this.getData(1000), boostThreshold: this.setBoostThreshold(1000)},
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
  chartLoad(e: any) {
    console.log('chartLoad', e);
  }
  chartSelection(e: any) {
    console.log('chartSelection', e);
    let data: any[] = [];

    for(const series of e.target.series) {
      const list = [];
      if(!e.x || !e.y) {
        return true;
      }
      if(series.visible === false) {
        continue;
      } else {
        const pointX = series.processedXData;
        const pointY = series.processedYData;
        for(let i=0; i< pointX.length; i++) {
          if((pointX[i] * 1.0) >= (e.xAxis[0].min * 1.0) && (pointX[i] * 1.0) <= (e.xAxis[0].max * 1.0) &&
             (pointY[i] * 1.0) >= (e.yAxis[0].min * 1.0) && (pointY[i] * 1.0) <= (e.yAxis[0].max* 1.0)) {

              list.push([pointX[i], pointY[i]]);
          }
        }
        data.push(list);
      }
    }



    let snapShot = {
      series: this.options.series.map((item: any, index: number) => {
        console.log('dataIndex', data[index].length);
        return {
          ...item,
          data: data[index],
          boostThreshold: data[index].length <= 10000 ? 0 : 1
        };
      })
    };


    const options = {
      ...this.options,
      series: snapShot.series
    };

    this.isZoomed = true;
    console.time('line');

    this.createChartLine(options);
    return false;
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
  setBoostThreshold(seriesDataCount: number) {
    return seriesDataCount > 10000 ? 1 : 0;
  }
  resetZoom() {
    this.isZoomed = false;
    console.time('line');
    this.createChartLine(this.options);
    // console.log(this.chart);
    // this.chart.xAxis[0].setExtremes();
    // this.chart.yAxis[0].setExtremes();

  }
}
