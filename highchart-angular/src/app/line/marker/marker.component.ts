import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

// import HighchartsMore from 'highcharts/highcharts-more';
// import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

// HighchartsMore(Highcharts);
// HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkerComponent implements OnInit {

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
            // label: {
            //   connectorAllowed: false,
            // },
            marker: {
              enabled: true,
              fillColor: 'white',
              lineWidth: 2,
              states: {
                // https://api.highcharts.com/highcharts/plotOptions.line.marker.states.select
                select: {
                  enabled:true,
                  fillColor:'blue',
                  lineColor:'red',
                  lineWidth:2,
                  radius:undefined
                }
              }
              // lineColor: Highcharts?.getOptions().colors[0]
            },
            lineWidth: 15
          }
      },
      series: [{
        name: 'Amount',
        data,
        linecap: 'square'
      }]
    } as any);

  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
