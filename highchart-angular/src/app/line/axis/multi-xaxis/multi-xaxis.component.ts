import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-multi-xaxis',
  templateUrl: './multi-xaxis.component.html',
  styleUrls: ['./multi-xaxis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultixAxisComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.createChartLine();
  }

  private createChartLine(): void {

    this.chart = Highcharts.chart({
      chart: {
        renderTo: 'chart-line',
        type: 'line',
        borderWidth: 1,
        plotBorderWidth: 1,
        marginRight: 50,
      },

      xAxis: [{
        type: 'datetime',
        gridLineWidth: 1,
      },{
          type: 'datetime',
          opposite: false,
          labels: {
            format: `<b>{text}</b>`,
            staggerLines: 1,
            y: -50
          },
          tickPosition: 'inside',
          tickWidth: 0,
          lineWidth: 0,
      }],

      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        pointStart: Date.UTC(2010, 0, 1),
        pointInterval: 24 * 3600 * 1000, // one day
        xAxis: 0,
      },{
        data: [176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0],
        pointStart: Date.UTC(2010, 0, 10),
        pointInterval: 24 * 3600 * 1000, // one day
        xAxis: 1,
      }
    ],

      plotOptions: {
        series: {
          allowPointSelect: false,
          animation: true,
        }
      },
    } as any)
  }
}
