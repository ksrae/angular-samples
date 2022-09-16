import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-drag-bg',
  templateUrl: './drag-background.component.html',
  styleUrls: ['./drag-background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragBackgroundComponent implements OnInit {
  chart: any;
  ngOnInit(): void {
    this.createChartLine();
  }

  private createChartLine(): void {
  }
}

// x축의 글자만 변경하기
// shift?? 여러 차트가 있을 때, 축을 변경해서 이동하는 효과가 가능한가?

