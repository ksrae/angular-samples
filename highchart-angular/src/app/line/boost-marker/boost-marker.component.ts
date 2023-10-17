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
  customMarkerRefresh = false;
  selectedPoints: number[][] = [];
  isZoom = true;

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
          data: this.getData(100),
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
  chartLoad(e: any) {
    console.log('chartLoad', e);

    const chart = this.chart ?? e.target;
    this.drawingCustomMarker(chart, 'square', chart.series[0], 70);
  }
  chartSelection(e: any) {
    console.log('chartSelection', e);
    this.customMarkerRefresh = true;

    if(e?.x && e?.y) {
      if(!e?.originalEvent.ctrlKey || !e?.originalEvent.metaKey) {
        this.selectedPoints = [];
        this.resetMarkersColor();
      }

      // customMarker에도 point와 동일한 drag ui 효과를 주기 위한 코드.
      if(this.customMarkers?.length) {
        for(const marker of this.customMarkers) {
          if(marker?.element) {
            const x = Number(marker.element.attributes.pointX.nodeValue);
            const y = Number(marker.element.attributes.pointY.nodeValue);

            if(x >= e.xAxis[0].min && x <= e.xAxis[0].max &&
               y >= e.yAxis[0].min && y <= e.yAxis[0].max) {
                const exist = this.existSelectedPoints(x,y);

                if(exist) {
                  this.addSelectedPoint(x,y);
                } else {
                  this.filterSelectedPoint(x,y);
                }
                marker.attr({
                  fill: !exist ? marker.element.attributes.selectColor.nodeValue : marker.element.attributes.originColor.nodeValue
                });
            }
          }
        }
      }
    }
    return this.isZoom;
  }
  chartAddSeries(e: any) {
    console.log('chartAddSeries', e);
  }
  chartRender(e: any) {
    console.log('chartRender', e);

    if(this.customMarkerRefresh) {
      this.customMarkerRefresh = false;
      const chart = this.chart ?? e.target;
      this.drawingCustomMarker(chart, 'square', chart.series[0], 70);
    }

    // this.chart?.resetZoomButton?.toFront();
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
    this.customMarkerRefresh = e.target?.visible;
    this.clearAllMarkers();
  }
  seriesMouseover(e: any) {
    // console.log('seriesMouseover', e);
  }
  seriesShow(e: any) {
    console.log('seriesShow', e);
    this.customMarkerRefresh = e.target?.visible;
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
  private drawingCustomMarker(
    chart: any,
    type: 'circle' | 'square',
    series: any,
    warningValue: number,
    size: number = 10,
    fill: string = 'red',
    selectColor: string = 'grey',
    strokeWidth: number = 1,
    strokeColor: string = 'black',
  ) {

    this.clearAllMarkers();

    if(series?.visible) {
      // 우리는 point 값이 필요한대 series의 point에서 x값만 다루고 y값은 다루지 않기 때문에 아래와 같이 처리해야 함.
      // ydata에서 필터 조건에 따라 맞는 포인트들의 index를 추려내서 series의 xData의 해당 index의 값을 가져온다.
      const filteredData: any[] = series.yData.map((item: any, index: number) => {
        if(item <= chart.yAxis[0].max && item >= chart.yAxis[0].min && item > warningValue) {
          return {x: series.xData[index], y: item};
        }
        return undefined;
      }).filter((item: any) => item !== undefined);

      console.log({filteredData});

      // series의 points에서 x값과 추출한 xData이 일치하는 point만 필터링 한다.
      const filteredPoints = series.points.filter((point: any) => {
        return filteredData.find((item: any) => {
          return item.x === point.x ? true : false;
        });
      });

      // 추출한 point들에 marker를 그려낸다.
      for(let i=0; i < filteredPoints.length; i++) {
        const point = filteredPoints[i];
        console.log({point});

        const x = chart.plotLeft + point.plotX - size / 2;
        const y = chart.plotTop + point.plotY - size / 2;

        // console.log({point}, {x}, {y});
        const renderer = type === 'circle' ? chart.renderer.circle(x + 2, y, size) : chart.renderer.rect(x, y, size, size);

        const marker = renderer.attr({
          fill,
          originColor: fill,
          selectColor: selectColor,
          stroke: strokeColor,
          'stroke-width': strokeWidth,
          cursor: 'pointer', // Set cursor style to indicate clickability
          'pointer-events': 'visible', // 이걸 해줘야 이벤트가 먹는다. 이것만 하면 안되고 zIndex를 조절해서 앞으로 나오게 해야한다.
          pointX: filteredData[i].x,
          pointY: filteredData[i].y,
          zIndex: 3,
        }).on('click', (e: any) => {
          e.stopPropagation();
          console.log(e);
          // 실제 포인트를 클릭 했을 때와 같은 ui로 동작하도록 코드를 추가함.
          if(!(e.ctrlKey || e.metaKey)) {
            this.resetMarkersColor();
          }

          const attributes = e.srcElement.attributes;
          marker.attr({
            fill: attributes.fill.nodeValue !== attributes.selectColor.nodeValue ?
                  attributes.selectColor.nodeValue : attributes.originColor.nodeValue
          });

        }).add(); //.toFront();
        // toFront() 함수를 사용하면 zoom 한 뒤에 tooltip보다 renderer가 위로 올라오는 문제가 발생한다.
        // resetZoomButton도 rednerer 뒤에 가려지는데 this.chart?.resetZoomButton?.toFront(); 이걸 쓰면 해결되긴 한다.


        this.customMarkers.push(marker);

        // 처리
        // 1. 원하는 포인트만 marker를 추가할 수 있다.
        // 2. zoom 에 대응할 수 있다.
        // 3. click도 가능하다.
        // 4. tooltip과 resetZoomButton 보다 아래로 내려가게 하면서도 click 이벤트를 유지하려면 'pointer-events': 'visible'을 설정하고 zIndex를 조절한다.
      }
    }

  }

  private resetMarkersColor() {
    if(this.customMarkers?.length) {
      for(const marker of this.customMarkers) {
        if(marker?.element) {
          marker.attr({
            fill: marker.element.attributes.originColor.nodeValue
          })
        }
      }
    }
  }
  private clearAllMarkers() {
    if(this.customMarkers.length) {

      for(const marker of this.customMarkers) {
        if(marker?.element) {
          marker.destroy();
        }
      }
    }
  }
  setZoom() {
    this.isZoom = !this.isZoom;
  }
  existSelectedPoints(x: number, y: number) {
    const exist = this.selectedPoints.some((point: number[]) => {
      if(x === point[0] && y === point[1]) {
        return true;
      }
      return false;
    });

    return exist;
  }
  addSelectedPoint(x: number, y: number) {
    this.selectedPoints.push([x,y]);
  }
  filterSelectedPoint(x: number, y: number) {
    this.selectedPoints = this.selectedPoints.filter(point => {
      if(x === point[0] && y === point[1]) {
        return false;
      }
      return true;
    })
  }
}
