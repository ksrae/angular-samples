import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import HC_grouped from "highcharts-grouped-categories";
HC_grouped(Highcharts);

@Component({
  selector: 'app-axis-group',
  templateUrl: './axis-group.component.html',
  styleUrls: ['./axis-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AxisGroupComponent implements OnInit {
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
        type: 'category',
        showEmpty: false,
        alternateGridColor: '#CCC',
        tickColor: 'red',
        tickWidth: 2,
        labels: {
          x: -10, // text position
          y: 10, // text position
          rotation: 45, // 기본 설정
          // staggerLines: 4,
          // maxStaggerLines: 4,
          step: 2,

          // style이 설정되면 formatter를 설정하지 않는다.
          // formatter가 설정되면 style은 설정하지 않는다.
          // style: {
          //   color: 'green',
          //   fontSize: '1em',
          //   fontWeight: 'normal',
          //   lineHeight: 0,
          //   // 'backgroundColor': 'yellow', not working
          // },
          useHTML: true,
          formatter: (e: any) => {
            return `
              <span style="background-color: ${e?.name ? e?.parent ? 'skyblue' : 'pink' : 'yellow'}">${e.name ?? e.value}</span>
            `;
          },
          // 최대 1레벨까지만 설정 가능하며,
          // 2레벨 설정은 기본 설정으로 처리해야 함.
          groupedOptions: [
            {
              rotation: -45, // 1 level
              style: {
                color: 'red',
              },
            },
            {
              rotation: 0, // 0 level
              align: 'right',
              style: {
                color: 'blue'
              }
            },
          ],
      },
        categories: [{
          name: "America",
          categories: [{
              name: "USA",
              categories: ["New York", "San Francisco"]
          }, {
              name: "Canada",
              categories: ["Toronto", "Vancouver"]
          }, {
              name: "Mexico",
              categories: ["Acapulco", "Leon"]
          }]
      }, {
          name: "Europe",
          categories: [{
              name: "United Kingdom",
              categories: ["London", "Liverpool"]
          }, {
              name: "France",
              categories: ["Paris", "Marseille"]
          }, {
              name: "Germany",
              categories: ["Berlin", "Munich"]
          }]
      }]
        // categories: [{
        //   name: '2014-12-19',
        //   categories: ['1', '2', '3'],
        // }, {
        //   name: '2014-12-20',
        //   categories: ['4', '5', '6'],
        // }, {
        //   name: '2014-12-21',
        //   categories: ['7', '8', '9'],
        // }, {
        //   name: '2014-12-22',
        //   categories: ['10', '11', '12'],
        // }],
      },
      // {
      //   type: 'datetime',
      //   lineWidth: 0,
      //   offset: 48.5,
      //   minPadding: 0,
      //   maxPadding: 0,
      //   startOnTick: true,
      //   endOnTick: true
      // }
      ],
      series: [{
        xAxis: 0,
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      },
      // {
      //   xAxis: 1,
      //   pointStart: Date.UTC(2014, 11, 19),
      //   pointInterval: 8 * 3600 * 1000,
      //   data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      // }
    ],

      plotOptions: {
        // value: -0.5,
        // color: 'green',
        // width: 5,
        // zIndex: 10,
        series: {
          allowPointSelect: false,
          animation: true,
        }
      },
    } as any)
  }

}
