import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-tooltip-multi',
  templateUrl: './tooltip-multi.component.html',
  styleUrls: ['./tooltip-multi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiTooltipComponent implements OnInit {
  chart: any;
  cloneTooltip = null;
  checkx: any[] = [];
  checky: any[] = [];
  clone: any[] = [];
  del: any[] = [];

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
                console.log('chart: ', this.chart.series[0]);
                console.log({p});

                //check if point was already clicked
                let x = this.checkx.indexOf(p.point.x);
                let y = this.checky.indexOf(p.point.y);
                if (x >= 0 &&  y >= 0 && x == y) {
                  console.log(1);
                  console.log(this.clone);
                  //remove tooltip
                  //$(clone[x]).remove();

                  //remove xy coordinate and clone from array --> tooltip can be displayed again
                  this.clone.splice(x, 1);
                  this.checky.splice(x, 1);
                  this.checkx.splice(x, 1);
                } else {


                  this.cloneTooltip = this.chart.series[0].chart.tooltip.label.element.cloneNode(true);

                  this.chart.container.firstChild.appendChild(this.cloneTooltip);
                  //save coordinates and tooltip object
                  this.checkx.push(p.point.x);
                  this.checky.push(p.point.y);
                  this.clone.push(this.cloneTooltip);
                }
                // console.log({p})

                // if(this.chart.customTooltip) {
                //   console.log('customTooltip: ', this.chart.customTooltip);
                //   this.chart.customTooltip.destroy();
                //   // this.chart.customTooltip = undefined;
                // }


                // this.chart.customTooltip = this.chart.renderer.label(
                //   'tooltip',
                //   this.chart.plotLeft + p.point.plotX,
                //   this.chart.plotTop + p.point.plotY)
                // .attr({
                //     padding: 10,
                //     r: 5,
                //     fill: '#000',
                //     zIndex: 5
                // })
                // .css({
                //     color: 'white'
                // })
                // .add();
              },
            },

          }
        }
      },

      title: {
        text: 'Multi Tooltip'
      },

      tooltip: {
        shared: false,
        enabled: true
      },

  } as any)
  }

  clearTooltip() {
    for(let item of this.clone) {
      this.chart.container.firstChild.removeChild(item);
    }

    // this.chart.customTooltip.destroy();
    this.clone = [];
    this.checkx = [];
    this.checky = [];
    this.cloneTooltip = null;

  }
}
