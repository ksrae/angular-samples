import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_boost from 'highcharts/modules/boost';

HC_boost(Highcharts);

export interface ChartCustomMarkerModel {
  type: 'circle' | 'square';
  seriesId: string;
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  markerColor?: string;
  markerSelectColor?: string;
  markerSize?: number;
  strokeColor?: string;
  strokeWidth?: number;
}
export interface ChartCustomMarkerPointModel {
  x: number;
  y: number;
  plotX: number;
  plotY: number;
}
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
  customMarkerOptionList : ChartCustomMarkerModel[]  = [
    {
      type: 'square',
      seriesId: 'series1',
      yMin: 90,
      yMax: 100
    }
  ];

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
  chartLoad(e: any) {
    console.log('chartLoad', e);

    const chart = this.chart ?? e.target;

    if(this.customMarkerOptionList?.length) {
      this.clearAllMarkers();
      setTimeout(() => {
        this.drawingCustomMarker(chart);
      }, 0);
    }
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
    this.customMarkerRefresh = true;
  }
  chartRender(e: any) {
    console.log('chartRender', e);

    if(this.customMarkerRefresh) {
      this.customMarkerRefresh = false;
      const chart = this.chart ?? e.target;

      this.clearAllMarkers();
      setTimeout(() => {
        this.drawingCustomMarker(chart);
      }, 0);

    }

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
    this.customMarkerRefresh = true;
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
  private drawingCustomMarker(chart: any) {
    if(this.customMarkerOptionList?.length) {
      const filteredData: ChartCustomMarkerPointModel[] = [];
      for(const customMarkerOption of this.customMarkerOptionList) {
        if(customMarkerOption.seriesId) {
          const series = chart.series.find((series: any) => customMarkerOption.seriesId === series.userOptions.id);
          if(series?.visible === true) {
            // filter points between min, max of axis.
            series.yData.forEach((item: number, index: number) => {
              const ymax = chart.yAxis[0].max;
              const ymin = chart.yAxis[0].min;

              const xmax = chart.xAxis[0].max;
              const xmin = chart.xAxis[0].min;

              const yMax = !customMarkerOption.yMax ? ymax : ymax > customMarkerOption.yMax ? customMarkerOption.yMax: ymax;
              const yMin = !customMarkerOption.yMin ? ymin : ymin < customMarkerOption.yMin ? customMarkerOption.yMin: ymin;

              const xMax = !customMarkerOption.xMax ? xmax : xmax > customMarkerOption.xMax ? customMarkerOption.xMax: xmax;
              const xMin = !customMarkerOption.xMin ? xmin : xmin < customMarkerOption.xMin ? customMarkerOption.xMin: xmin;

              const plotX = chart.xAxis[0].toPixels(series.xData[index]);
              const plotY = chart.yAxis[0].toPixels(item);

              const x = series.xData[index];
              const y = item;

              if(y <= yMax && y >= yMin && x <= xMax && x >= xMin) {
                filteredData.push({x, y, plotX, plotY});
              }
            });

            const chunks: any[] = this.arrayChunk(filteredData);

            let i=0;

            const markerTimer = setInterval(() => {
              this.createMarker(chart, chunks[i], series, customMarkerOption);
              i+=1;
              if(i >= chunks.length) {
                clearInterval(markerTimer);

              }
            }, 10);



            // console.log('filteredData?.length', filteredData);
          }
        };
      } // for

    }

  }

  private createMarker(chart: any, data: ChartCustomMarkerPointModel[], series: any, option: ChartCustomMarkerModel) {
    const markerSize = option.markerSize ?? 10;

    data.forEach(item => {

      // const x = chart.plotLeft + data.plotX - customMarkerOption.markerSize / 2;
      // const y = chart.plotTop + data.plotY - customMarkerOption.markerSize / 2;

      const x = item.plotX - (markerSize / 2);
      const y = item.plotY - (markerSize / 2);

      const renderer = option.type === 'circle' ? chart.renderer.circle(x + 5, y, markerSize - 2) : chart.renderer.rect(x - 2, y, markerSize + 3, markerSize + 3);

      const marker = renderer.attr({
        fill: option.markerColor ?? 'red',
        originColor: option.markerColor ?? 'red',
        selectColor: option.markerSelectColor ?? 'grey',
        stroke: option.strokeColor ?? 'black',
        'stroke-width': option.strokeWidth ?? 1,
        cursor: 'pointer',
        'pointer-events': 'visible',
        pointX: item.x,
        pointY: item.y,
        zIndex: 4, // series.userOptions.zIndex, // 3-4 is good, less then 3-4 makes no fired click event, too high zIndex makes marker is covered to tooltip.
      }).on('click', (e: any) => {
        e.stopPropagation();
        console.log('click', {item});
        // this is for controling click custom marker ui.
        if(!e.ctrlKey || !e.metaKey) {
          this.resetMarkersColor();
        }

        const attributes = e.srcElement.attributes;

        marker.attr({
          fill: attributes.fill.nodeValue !== attributes.selectColor.nodeValue ?
                attributes.selectColor.nodeValue : attributes.originColor.nodeValue
        });

        // fires seriesPointClickEvent as well
        // if(this.isTypeSelected('Tooltip')) {
        //   const filteredPoint = series.points.find((point: any) => {
        //     return data.x === point.x && data.y === point?.y ? true : false;
        //   });

        //   if(filteredPoint) {
        //     this.tooltipPointEmitter.emit({type: 'multi', point: filteredPoint});
        //   }
        // }

      }).on('contextmenu', (e: any) => {
        console.log('contextmenu', e);
        e.preventDefault();

      }).add();

      this.customMarkers.push(marker);

    });



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
    this.customMarkers = [];
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
  private arrayChunk(arr: ChartCustomMarkerPointModel[], chunkSize: number = 1000): ChartCustomMarkerPointModel[][] {
    const chunks: ChartCustomMarkerPointModel[][] = [];
    for(let i=0; i < arr.length; i+= chunkSize) {
      chunks.push(arr.slice(i, i+chunkSize));
    }
    return chunks;
  }
}
