import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Boost from 'highcharts/modules/boost';

Boost(Highcharts);

@Component({
  selector: 'app-gpu-boost',
  templateUrl: './gpu-boost.component.html',
  styleUrls: ['./gpu-boost.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GpuBoostComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    console.time('line');
    this.createChartLine();
  }

  private createChartLine(): void {
    this.chart = Highcharts.chart({
      chart: {
        renderTo: 'chart-line',
        type: 'line',
      },

      boost: {
        allowForce: true,
        useGPUTranslations: true,
        usePreallocated: true,
      },

      series: [{
        data: this.getData(10000000)
      }],
    } as any)


    console.timeEnd('line');
  }

  private getData(n: number): number[][] {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push([
            i,
            2 * Math.sin(i / 100) + Math.random() * 100
        ]);
    }

    return arr;
  }

}
