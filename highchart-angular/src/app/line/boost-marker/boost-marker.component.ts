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
  customMarkers: any[] = [];

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

      tooltip: {
        pointFormat: `<div style="color: {point.series.color};">{point.id}: {point.y}</div>`,
        
        // useHTML: true,
        // formatter: (e: Highcharts.TooltipFormatterContextObject) => {
        //   console.log(e);
        //   const point = e.point;
        //   const seriesColor = point.series.color;
        //   const tooltipContent = `<div class="highcharts-tooltip" style="color: ${seriesColor};">${point.name}: ${point.y}</div>`;
        //   return tooltipContent;
        // },
        // zIndex: 9999,
      },

      series: [
        {
          data: this.getData(100),
          boostThreshold: 1,
          marker: { enabled: false }
        },
        {data: this.getData(100), boostThreshold: 1},
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

    const chart = this.chart ?? e.target;
    console.log('chartRender', chart);

    this.drawingSquare(chart, chart.series[0], 70);
  }
  chartClick(e: any) {
    console.log('chartClick', e);
    e.preventDefault();
    return false;
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

    console.log({arr})
    return arr;
  }

  private drawingSquare(
    chart: any,
    series: any,
    warningValue: number,
    squareSize: number = 10,
    strokeWidth: number = 2,
    fill: string = 'red',
    strokeColor: string = 'black') {
    this.clearAllMarkers();

    // 우리는 point 값이 필요한대 series의 point에서 x값만 다루고 y값은 다루지 않기 때문에 아래와 같이 처리해야 함.
    // ydata에서 필터 조건에 따라 맞는 포인트들의 index를 추려내서 series의 xData의 해당 index의 값을 가져온다.
    const filteredData: any[] = series.yData.map((item: any, index: number) => {
      if(item <= chart.yAxis[0].max && item >= chart.yAxis[0].min && item > warningValue) {
        return {xData: series.xData[index], yData: item};
      }
      return undefined;
    }).filter((item: any) => item !== undefined);

    console.log({filteredData});

    // series의 points에서 x값과 추출한 xData이 일치하는 point만 필터링 한다.
    const points = series.points.filter((point: any) => {
      return filteredData.find((item: any) => {
        return item.xData === point.x ? true : false;
      });
    });

    console.log({points});

    // 추출한 point들에 marker를 그려낸다.
    for(let i=0; i<points.length; i++) {
      const point = points[i];

      const x = chart.plotLeft + point.plotX - squareSize / 2;
      const y = chart.plotTop + point.plotY - squareSize / 2;

      // console.log({point}, {x}, {y});
      const square = chart.renderer.rect(x,y, squareSize, squareSize)
      .attr({
        fill,
        stroke: strokeColor,
        'stroke-width': strokeWidth,
        cursor: 'pointer', // Set cursor style to indicate clickability
      }).on('click', (e: any) => {
        e.stopImmediatePropagation();

        console.log('click point', point, filteredData[i]);

      }).add().toFront();


      // square.css({
      //   cursor: 'pointer',
      //   pointerEvents: 'auto'
      // });
      // square.toFront();

      this.customMarkers.push(square);

      // console.log(this.customMarkers);



      // for(const point of series.points) {
      //   this.chart?.tooltip.refresh(point);
      // }

      // 처리와 미처리
      // 처리
      // 1. 원하는 포인트만 marker를 추가할 수 있다.
      // 2. zoom 에 대응할 수 있다.
      // 3. click도 가능하다.
      // 미처리
      // 1. zoom 되면 tooltip보다 renderer가 상위로 올라온다. reset 버튼로 하위로 내려간다.
      // 이는 toFront() 때문에 발생하는데 toFront()를 빼면 click 이벤트가 동작하지 않는다.
    }
  }

  private clearAllMarkers() {
    this.customMarkers?.forEach(marker => marker.destroy());
  }
}
