import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-plot-lines',
  templateUrl: './plot-lines.component.html',
  styleUrls: ['./plot-lines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlotLinesComponent implements OnInit {
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        plotLines: [{
            color: '#FF0000',
            width: 2,
            value: 5.5,
            id: 'myPlotLineId'
        }]
      },

      series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      }],

      plotOptions: {
        series: {
          allowPointSelect: true,
          point: {
            events: {
              mouseOver: (e: any) => {
                this.chart.xAxis[0].removePlotLine('myPlotLineId');

                this.chart.xAxis[0].addPlotLine({
                    value: e.target.x,
                    color: 'red',
                    width: 2,
                    dashStyle: 'dash',
                    id: 'myPlotLineId'
                });

              }
            }
          }
        }
      }

    } as any)
  }
}
