import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-overlayblank',
  templateUrl: './overlayblank.component.html',
  styleUrls: ['./overlayblank.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayblankComponent implements OnInit {


  chart: any;
  series = [{
    name: 'Amount',
    data: [null, null, null, 10,20,30,40, 90, 80, 20],
    linecap: 'square'
  }, {
    name: 'Amount2',
    data: [10,20,30,40, null, null, null, 50, 60, 70],
    linecap: 'square'
  }, {
    name: 'Amount3',
    data: [null, null, 80, 50,70,20,60, null, 50, 10],
    linecap: 'square'
  }];

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
      series: this.series,
    } as any);

  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  blank(type: 'overlay' | 'blank' | 'both') {

    let series = [{
      name: 'Amount',
      data: [null, null, null, 10,20,30,40, 90, 80, 20],
      linecap: 'square'
    }, {
      name: 'Amount2',
      data: [10,20,30,40, null, null, null, 50, 60, 70],
      linecap: 'square'
    }, {
      name: 'Amount3',
      data: [null, null, 80, 50,70,20,60, null, 50, 10],
      linecap: 'square'
    }];

    return series.map(item => {
      let point = this.findFirstValuePoint(item.data, true);
      let firstNulls = item.data.splice(0, point);

      let newData: any[] = [];
      if(type === 'overlay') {
        newData = item.data;
      } else if (type === 'blank') {
        newData = [...firstNulls, ...this.fillterNullValue(item.data)];
      } else {
        newData = [...this.fillterNullValue(item.data)];
      }

      console.log({
        ...item,
        data: newData
      });

    })

  }

  findFirstValuePoint(arr: any[], isOverlay: boolean) {
    if(Array.isArray(arr[0])) {
      return arr.findIndex(item => item[1] !== null);
    }
    return arr.findIndex(a => a !== null);
  }

  fillterNullValue(arr: any[]) {
    if(Array.isArray(arr[0])) {
      return arr.filter(val => val[1] !== null);
    }
    return arr.filter(val => val !== null);
  }

}
