import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-xaxis-datetime',
  templateUrl: './xaxis-datetime.component.html',
  styleUrls: ['./xaxis-datetime.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XaxisDateTimeComponent implements OnInit {

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

      xAxis: {
          type: 'datetime',
          opposite: false,
          gridLineWidth: 1,
          tickPosition: 'outside',

      },

      yAxis: {
        endOnTick: false,
        maxPadding: 0,
        margin: 15,
      },

      series: [{
        data: [
          [Date.UTC(2022,0,1,1,0,0), 29.9],
          [Date.UTC(2022,0,1,1,0,3), 71.5],
          [Date.UTC(2022,0,1,1,0,5), 106.4],
          [Date.UTC(2022,0,1,1,0,10), 129.2],
          [Date.UTC(2022,0,1,1,0,20), 144.0],
          [Date.UTC(2022,0,1,1,1,0), 176.0],
          [Date.UTC(2022,0,1,1,1,5), 135.6],
          [Date.UTC(2022,0,1,1,1,15), 148.5],
          [Date.UTC(2022,0,1,1,2,20), 216.4],
          [Date.UTC(2022,0,1,1,2,21), 116.4],
          [Date.UTC(2022,0,1,1,2,40), 16.4],
          [Date.UTC(2022,0,1,1,3,0), 56.4],
          [Date.UTC(2022,0,1,1,3,50), 96.4],
          [Date.UTC(2022,0,1,1,5,10), 216.4],

        ],
        xAxis: 0,
      }, {
        pointStart: Date.UTC(2022, 0, 1, 1, 0, 0),
        pointInterval: 30 * 1000, // 30 sec
        data: [40,50,60,70,80,null,100,110,120,130,120],
        xAxis: 0
      }],

      plotOptions: {
        series: {
          allowPointSelect: false,
          animation: true,
          connectNulls: false
        }
      },
    } as any)
  }
}
