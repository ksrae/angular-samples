import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-series-visible',
  templateUrl: './series-visible.component.html',
  styleUrls: ['./series-visible.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeriesVisibleComponent implements OnInit {

  chart: any;


  ngOnInit() {
    this.createChartLine();
  }

  private createChartLine(): void {

    this.chart = Highcharts.chart({
      chart: {
        renderTo: 'chart-line',
        type: 'line',
        // selection: (e: any) => this.selectPointsByDrag(e),
      },

      series: [{
        data: [4, 3, 5, 6, 2, 3]
      },{
        data: [4, 3, 5, 6, 2, 3].reverse(),
        showInLegend: false
      }],


    } as any);

  }

  showSeries() {
    this.chart.series[1].setVisible(true);
  }

  hideSeries() {
    this.chart.series[1].setVisible(false);
  }

}
