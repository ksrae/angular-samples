import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import DraggablePoints from 'highcharts/modules/draggable-points';
import Exporting from 'highcharts/modules/exporting';

DraggablePoints(Highcharts);
Exporting(Highcharts);

@Component({
  selector: 'app-axis-shift2',
  templateUrl: './axis-shift2.component.html',
  styleUrls: ['./axis-shift2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AxisShift2Component implements OnInit {
  chart: any;
  data: number[] = [-10, -5, 0, 5, 10, 15, 10, 10, 5, 0, -5, -10];

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
        allowDecimals: false
        // type: 'category', // type 이 category이면, crosshair y축이 범위로 표시됨.
        // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },

      series: [{
        data: this.data,
        dragDrop: {
          draggableX: true,
          draggableY: true,
          liveRedraw: false
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
              console.log('drop', e, this.chart);

              let gap = {
                x: e.newPoint.x - e.origin.points[e.newPointId].x,
                y: e.newPoint.y - e.origin.points[e.newPointId].y
              };

              let origin = this.chart.series[0].data.map((item: any) => {
                return [item.x + gap.x, item.y + gap.y];
              });

              console.log({gap});
              console.log({origin});

              // this.chart.series[0].setData(origin.slice(), true, true, true);
              this.chart.series[0].update({
                data: origin.slice(),
              }, true);
            }
          }
        }
      },{
        data: [-3, 8, 13, 19, 12, 4, -7, 2, 26, 35, 6, 4]
      }],

      plotOptions: {
        line: {
          cursor: 'ns-resize',
        },
        series: {

        },

      }


    } as any);
  }

  left() {

  }
  right() {

  }
  top() {

  }
  bottom() {

  }
}
