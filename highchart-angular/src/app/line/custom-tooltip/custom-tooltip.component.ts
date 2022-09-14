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

  constructor(
    private cd: ChangeDetectorRef
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
          allowPointSelect: true,
          animation: false,
          point: {
            events: {
              click: (p: any) => {
                console.log({p})

                if(this.chart.customTooltip) {
                  // this.chart.customTooltip.destroy();
                  this.chart.customTooltip = undefined;
                }


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
              },
              select: (s: any) => {
                console.log({s});
                const selectPoints = this.chart.getSelectedPoints();
                console.log({selectPoints})
                console.log(this.chart.series[0]);
                selectPoints[0].color = 'red';
                // selectPoints[0].update({
                //   redraw: true, animation: false
                // });
              //   s.target.update({
              //     marker: {
              //         states: {
              //             select:{
              //                 lineWidth: 1.5,
              //                 lineColor: 'blue'
              //             }
              //         }
              //     }
              // }, true);

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
}
