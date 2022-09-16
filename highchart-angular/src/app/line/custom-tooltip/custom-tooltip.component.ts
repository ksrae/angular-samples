import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import DraggablePoints from 'highcharts/modules/draggable-points';

DraggablePoints(Highcharts);

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTooltipComponent implements OnInit {

  chart: any;
  tooltips: any[] = [];

  constructor(

  ) {}
  ngOnInit() {
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
          load: (c: any) => {
            console.log({c})
            // var chart = this;
            // chart.rGroup = chart.renderer.g('rGroup').add() // create an SVG group to allow translate
          }
        }
      },

      series: [{
        name: 'Amount',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        linecap: 'square'
      }],
      plotOptions: {
        series: {
          allowPointSelect: false,
          animation: false,
          point: {
            events: {
              click: (p: any) => {

                this.chart.customTooltip = this.chart.renderer.label(
                  'tooltip',
                  this.chart.plotLeft + p.point.plotX,
                  this.chart.plotTop + p.point.plotY)
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


                this.tooltips.push(this.chart.customTooltip);
              },
            },

          }
        }
      },

      title: {
        text: 'Custom Tooltip'
      },

      tooltip: {
        enabled: false // disable the default one
      },

  } as any)
  }

  clearTooltip() {
    for(let item of this.tooltips) {
      item.destroy();
    }
    this.tooltips = [];
  }
}
