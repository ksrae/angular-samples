import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting';
import { BehaviorSubject, tap } from 'rxjs';

// Exporting(Highcharts);

// https://jsfiddle.net/0yu1t9o4/
@Component({
  selector: 'app-drag-point-multi-dimension',
  templateUrl: './drag-point-multi-dimension.component.html',
  styleUrls: ['./drag-point-multi-dimension.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragPointMultiDimensionComponent implements OnInit {
  chart: any;
  options = {
    chart: {
      renderTo: 'chart-line',
      type: 'line',
      events: {
        selection: (e: any) => this.selectPointsByDrag(e)
      },
      zoomType: 'xy'
    },
     xAxis: {
      type: 'category',
     },
    series: [{
        data: [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5], ['f', 6],]
      }, {
        data: [['a', 6], ['b', 5], ['c', 4], ['d', 3], ['e', 2], ['f', 1],]
      }, {
        data: [[0, 3], [1, 4], [2, 1], [3, 2], [4, 6], [5, 5],]
      }
    ]


  } as any;

  options$ = new BehaviorSubject<any>(this.options);


  ngOnInit(): void {
    // console.log(this.options);
    this.createChartLine();
  }

  private createChartLine(): void {
    this.options$.pipe(
      tap(options => {
        this.chart = Highcharts.chart(options);
      })
    ).subscribe();

  }

  selectPointsByDrag(e: any) {
    console.log(e);
    console.log('aaaaaaaaaaaaa', e.target.series[0].points[0]);
    console.log('aaaaaaaaaaaaa', e.target.series[0].data[0]);
    let group: any[] = [];

    for(let series of e.target.series) {
      let list = [];
      for(let point of series.points) {
        if (point.x >= e.xAxis[0].min && point.x <= e.xAxis[0].max &&
            point.y >= e.yAxis[0].min && point.y <= e.yAxis[0].max) {

              // console.log(point.options)
          list.push([point.options?.name ? point.options.name : point.options.x, point.options.y]);
        }

      }
      group.push(list);
    }

    // console.log({group});

    this.options = {
      ...this.options,
      series:
        this.options.series.map((item: any, index: number) => {
          return {
            ...item,
            data: group[index]
          }
        })
    };

    console.log(this.options);

    this.options$.next(this.options);



    return false;

  }


}

