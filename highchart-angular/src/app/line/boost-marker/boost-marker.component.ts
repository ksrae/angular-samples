import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_boost from 'highcharts/modules/boost';

HC_boost(Highcharts);

@Component({
  selector: 'app-boost-marker',
  templateUrl: './boost-marker.component.html',
  styleUrls: ['./boost-marker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoostMarkerComponent implements OnInit {
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
      series: [
        {
          data: this.getData(20),
          boostThreshold: 1,
          marker: { enabled: false }
        },
        {data: this.getData(20), boostThreshold: 1},
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
  chartLoad(e: any) {
    console.log('chartLoad', e);
    const point = e.target.series[0].points[10];
    const squareSize = 10;
    const x = e.target.plotLeft + point.plotX - squareSize / 2;
    const y = e.target.plotTop + point.plotY - squareSize / 2;
    const square = e.target.renderer.rect(x,y, squareSize, squareSize)
      .attr({
        fill: 'red',
        stroke: 'black',
        'stroke-width': 2,
        cursor: 'pointer', // Set cursor style to indicate clickability

      }).add();
      // .on('click', (e: any) => {
      //   console.log('click', e);
      // }).add();

    // point.graphic.on('click', function() {
    //   // Handle the point click event
    //   console.log('Point clicked!');
    // });
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
    console.log(this.chart)
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

    console.log({arr})
    return arr;
  }

}
