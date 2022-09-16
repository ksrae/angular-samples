import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineDistanceComponent implements OnInit {
  chart: any;
  selectPoints = [];
  categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
        events: {
          click: (e: any) => {
            // remove length series
            if(this.chart.series.length > 1) {
              this.chart.series[this.chart.series.length -1].remove(false);

              for(let i=0; i<this.chart.getSelectedPoints().length; i++) {
                this.chart.getSelectedPoints()[i].select(false);
              }

            }

          }
        },
      },

      xAxis: {
        categories: this.categories,


      },



      series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      }],

      plotOptions: {
        series: {
          allowPointSelect: true,
          point: {
            events: {
              select: (p: any) => {
                // two points selected add series for length
                this.addSeries();
              },
            }
          },
          marker: {
            enabled: true,
            fillColor: 'blue',
            lineWidth: 2,
            symbol: 'square',
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
        },

      },

    } as any)
  }

  private addSeries() {
    let data: any[] = [];
    let index = 0;
    let distance;
    const selectedPoints = this.chart.getSelectedPoints();


    if(selectedPoints.length != 2) {
      return ;
    }
    distance = {
      y: selectedPoints[1].y - selectedPoints[0].y,
      x: selectedPoints[1].x - selectedPoints[0].x,
    };

    console.log('aaaaa', selectedPoints);

    for(let i=0; i < this.categories.length; i++) {
      if(selectedPoints[index].index === i) {
        data.push(selectedPoints[index].y);
        index = 1;
      } else {
        data.push(null);
      }
    }


    this.chart.addSeries({
      allowPointSelect: false,
      // data: [null, null, 106.4, null, null, null, null, 148.5, null, null, null, null],
      data,
      dataLables: {
        enabled: false
      },
      connectNulls: true, // null 값을 연결
      tooltip: {
        headerFormat: `<b>distance</b>`,
        pointFormat: `
          <br/>
          <p>x: ${distance.x}</p>
          <br/>
          <p>y: ${Math.floor(distance.y)}</p>`,
        footerFormat: '<br/>',
        valueDecimals: 2,
        shared: false, // 모든 차트 정보를 하나로, 포멧도 통일됨.
        split: false, // 툴팁 여러 개로 표시
        useHTML: true,
        followPointer: true, // 마우스가 어디든 툴팁이 따라옴
        // positioner: () => { return {x: 80, y: 50}}, // 위치 고정
        shadow: false,
        // crosshairs: true, // deprecated
      },
    })
  }
}
