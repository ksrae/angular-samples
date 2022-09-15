import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

// import HighchartsMore from 'highcharts/highcharts-more';
// import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

// HighchartsMore(Highcharts);
// HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit {

  chart: any;


  ngOnInit() {
    this.createChartLine();
  }

  private createChartLine(): void {

    const data: any[] = [{
      name: 'Republican',
      y: 29.9,
      custom: {
        test:'first item'
      },
  }, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];

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
      tooltip: {
        headerFormat: '<table><tr><th colspan="2">{point.key}</th></tr>',
        pointFormat: `<tr><td style="color: {series.color}">{series.name} {point.options.custom.test} {series.options.custom.test} ${tooltipTxt}></td>` +
            '<td style="text-align: right"><b>{point.y} EUR</b></td></tr>',
        footerFormat: '</table>',
        valueDecimals: 2,
        shared: false, // 모든 차트 정보를 하나로, 포멧도 통일됨.
        split: false, // 툴팁 여러 개로 표시
        useHTML: true,
        followPointer: true, // 마우스가 어디든 툴팁이 따라옴
        // positioner: () => { return {x: 80, y: 50}}, // 위치 고정
        shadow: false,
        // crosshairs: true, // deprecated
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
            allowPointSelect: false,
            borderWidth: 0,
            dataLabels: {
              enabled: true
            },
          }
      },
      series: [{
        name: 'Amount',
        data,
        linecap: 'square',
        custom: {
          test: 'test data',
        }
      }]
    } as any);

  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
