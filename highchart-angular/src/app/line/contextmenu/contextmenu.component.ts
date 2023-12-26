import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent implements OnInit {
  chart: any;
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
          load: (e: any) => {
            for(let series of e.target.series) {
              for(let point of series.points) {
                point.graphic.on('contextmenu', (f: any) => {
                  f.preventDefault();
                  console.log('contextmenu', {point});
                  return false;
                });

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

}
