import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting';
import { BehaviorSubject, tap } from 'rxjs';

// Exporting(Highcharts);

// https://jsfiddle.net/0yu1t9o4/
@Component({
  selector: 'app-drag-point',
  templateUrl: './drag-point.component.html',
  styleUrls: ['./drag-point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragPointComponent implements OnInit {
  chart: any;
  // series가 이차원 배열만 존재한다면 type은 'category'여야 적용된다.
  // xAxis의 categories가 정의되어 있으면 일차원 이차원 관계 없이 적용된다.
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
      // type: 'category',
      categories: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
     },
    series: [
      {
        data: [10, 5, 0, -5, -10, -15, -10, -10, -5, 0, 5],
      },
      // {
      //   data: [7,6,5,4,3,2,1],
      // },
      // {
      //   data: [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['g', 5], ['k', 6]]
      // }
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

    let categories = [];
    let group: any[] = [];

    for(let series of e.target.series) {
      let list = [];
      for(let point of series.points) {
        if (point.x >= e.xAxis[0].min && point.x <= e.xAxis[0].max &&
            point.y >= e.yAxis[0].min && point.y <= e.yAxis[0].max) {

          list.push(point.y);
          categories.push(point.category);
        }

      }
      group.push(list);
    }

    // console.log({group});

    this.options = {
      ...this.options,
      xAxis: {
        ...this.options.xAxis,
        categories: categories
      },
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

