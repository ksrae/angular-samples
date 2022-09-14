import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

// import HighchartsMore from 'highcharts/highcharts-more';
// import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

// HighchartsMore(Highcharts);
// HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-getpoint',
  templateUrl: './getpoint.component.html',
  styleUrls: ['./getpoint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetpointComponent implements OnInit {


  chart: any;


  ngOnInit() {
    this.createChartLine();
  }

  private createChartLine(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push([`${date.getDate()}/${date.getMonth() + 1}`, this.getRandomNumber(0, 1000)]);
    }

    const tooltipTxt = 'ttx';

    this.chart = Highcharts.chart({
      chart: {
        renderTo: 'chart-line',
        type: 'line',
        // selection: (e: any) => this.selectPointsByDrag(e),
      },
      title: {
        text: 'Line Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: true,
      },
      yAxis: {
        title: {
          text: null,
        },
        // crosshair: true,
        crosshair: {
          snap: false,
        }
      },
      xAxis: {
        type: 'category', // type 이 category이면, crosshair y축이 범위로 표시됨.
        // crosshair: true,
        crosshair: {
          snap: false,
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      plotOptions: {
          series: {
            allowPointSelect: true,
            borderWidth: 0,
            dataLabels: {
              enabled: true
            },
          }
      },
      series: [{
        name: 'Amount',
        data,
        linecap: 'square'
      },
      {
        name: 'iii',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      }],

    } as any);

  }

  getSelectedPoints(e: any) {
    console.log({e}, this.chart.getSelectedPoints());
    const selectedPoints = this.chart.getSelectedPoints();

    selectedPoints[0].color = 'red';

    if (this.chart.lbl) {
      this.chart.lbl.destroy();
    }
    this.chart.lbl = this.chart.renderer.label('You selected ' + selectedPoints.length + ' points', 100, 60)
        .attr({
            padding: 10,
            r: 5,
            fill: '#000',
            zIndex: 5
        })
        .css({
            color: 'white'
        })
        .add();
  }

  selectPointsByDrag(e: any) {
    console.log({e});
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
