import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import DraggablePoints from 'highcharts/modules/draggable-points';
import Exporting from 'highcharts/modules/exporting';

DraggablePoints(Highcharts);
Exporting(Highcharts);

@Component({
  selector: 'app-axis-shift',
  templateUrl: './axis-shift.component.html',
  styleUrls: ['./axis-shift.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AxisShiftComponent implements OnInit {
  chart: any;
  data: number[] = [-10, -5, 0, 5, 10, 15, 10, 10, 5, 0, -5, -10];

  max = 11;
  min = 0;

  ngOnInit(): void {
    this.createChartLine();
  }

  private createChartLine(): void {
    this.chart = Highcharts.chart({
      chart: {
        renderTo: 'chart-line',
        type: 'line',
      },

      xAxis: {
        allowDecimals: false,
        // type: 'category', // type 이 category이면, crosshair y축이 범위로 표시됨.
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        max: this.max,
        min: this.min
      },

      series: [{
        data: this.data,
        connectNulls: false,
        dragDrop: {
          draggableX: true,
          draggableY: true,
          liveRedraw: false,
        },
        // events: {
        //   mouseOver: (e: any) => {
        //     console.log({e})
        //   }
        // },
        point: {
          events: {
            dragStart: (e: any) => {
              console.log('start', e);
            },
            drag: (e: any) => {
              // console.log('drag', e);
            },
            drop: (e: any) => {
              // console.log('drop', e, this.chart);

              let gap = {
                x: e.newPoint.x - e.origin.points[e.newPointId].x,
                y: e.newPoint.y - e.origin.points[e.newPointId].y
              };

              let origin = this.chart.series[0].data.map((item: any) => {
                console.log(item.x + gap.x)
                return [item.x + gap.x, item.y + gap.y];
              });

              // console.log({gap});
              // console.log({origin});


              this.chart.series[0].setData(origin);
              // this.chart.series[0]?.update({
              //   data: origin,
              // }, false);


              return false;
            }


//     const currentSeries = (this.chartOptions.series[e.target.series.index] as any).data.map((item: any, index: number) => {
//       let newXposition = 0;
//       let newYposition = 0;

//       // console.log({item}, typeof(item) === 'object');

//       if(Array.isArray(item)) {
//         newXposition = item[0] === null ? null : item[0] + gap.x;
//         newYposition = item[1] === null ? null : item[1] + gap.y;

//       } else if(typeof(item) === 'object') {
//         newXposition = item === null || item?.x === null ? index + gap.x : item.x + gap.x;
//         newYposition = item === null || item?.y === null ? null : item.y + gap.y;

//       } else {
//         newXposition = index + gap.x;
//         newYposition = item === null ? null : item + gap.y;
//       }

//       return [newXposition, newYposition];
//     });

//     this.setChartOptions({
//       ...this.chartOptions,
//       series: [...this.chartOptions.series.map((o: Highcharts.SeriesOptionsType, i: number): Highcharts.SeriesOptionsType => {
//         return {
//           ...o,
//           data: i === e.target.series.index ? currentSeries: (o as any).data
//         };
//       })],
//     })

//     return;
//   }
//   return;
          }
        }
      },{
        // data: [-3, 8, 13, 19, 12, 4, -7, 2, 26, 35, 6, 4]
      }],

      plotOptions: {
        line: {
          cursor: 'ns-resize',
        },
        series: {

        },
        allowPointSelect: false,

      }


    } as any);
  }

}


// drop: (e: any) => {
//   if(this.isTypeSelected('SeriesShift')) {
//     const gap = {
//       x: e.newPoint.x ? e.newPoint.x - e.origin.points[e.newPointId].x : 0,
//       y: e.newPoint.y ? e.newPoint.y - e.origin.points[e.newPointId].y : 0
//     };

//     const currentSeries = (this.chartOptions.series[e.target.series.index] as any).data.map((item: any, index: number) => {
//       let newXposition = 0;
//       let newYposition = 0;

//       // console.log({item}, typeof(item) === 'object');

//       if(Array.isArray(item)) {
//         newXposition = item[0] === null ? null : item[0] + gap.x;
//         newYposition = item[1] === null ? null : item[1] + gap.y;

//       } else if(typeof(item) === 'object') {
//         newXposition = item === null || item?.x === null ? index + gap.x : item.x + gap.x;
//         newYposition = item === null || item?.y === null ? null : item.y + gap.y;

//       } else {
//         newXposition = index + gap.x;
//         newYposition = item === null ? null : item + gap.y;
//       }

//       return [newXposition, newYposition];
//     });

//     this.setChartOptions({
//       ...this.chartOptions,
//       series: [...this.chartOptions.series.map((o: Highcharts.SeriesOptionsType, i: number): Highcharts.SeriesOptionsType => {
//         return {
//           ...o,
//           data: i === e.target.series.index ? currentSeries: (o as any).data
//         };
//       })],
//     })

//     return;
//   }
//   return;
// }
