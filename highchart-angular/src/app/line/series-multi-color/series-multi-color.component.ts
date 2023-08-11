import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-series-multi-color',
  templateUrl: './series-multi-color.component.html',
  styleUrls: ['./series-multi-color.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeriesMultiColorComponent implements OnInit {
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

      series: [{
        data: [-10, -5, 0, 5, 10, 15, 10, 10, 5, 0, -5],
        zones: [{
            value: 0,
            color: '#f7a35c'
        }, {
            value: 10,
            color: '#7cb5ec'
        }, {
            color: '#90ed7d'
        }]
    }]

    } as any);
  }
}

