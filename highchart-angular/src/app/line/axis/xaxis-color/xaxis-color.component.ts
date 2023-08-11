import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-xaxis-color',
  templateUrl: './xaxis-color.component.html',
  styleUrls: ['./xaxis-color.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XaxisColorlComponent implements OnInit {
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

      xAxis: [{
        categories: ['Foo', 'Bar', 'Foobar'],
        labels: {
          useHTML: true,
          formatter: (e: any) => {
            return `<span style="background-color: red;color:yellow;">${e.value}</span>`;
          }
        }
      }],
      series: [{
          data: [29.9, 71.5, 106.4],
          xAxis: 0
      }]

    } as any);
  }


}
