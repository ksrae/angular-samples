import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-xaxis-label',
  templateUrl: './xaxis-label.component.html',
  styleUrls: ['./xaxis-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XaxisLabelComponent implements OnInit {
  chart: any;

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
        type: 'category', // type 이 category이면, crosshair y축이 범위로 표시됨.
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          formatter: (e: any) => {
            return e.value;
          }
        }
      },

      series: [{
        data: [-10, -5, 0, 5, 10, 15, 10, 10, 5, 0, -5, -10],

      }]

    } as any);
  }

  change() {
    this.chart.xAxis[0].setCategories([1,2,3,4,5,6,7,8,9,10, 11, 12], true);

  }
}
