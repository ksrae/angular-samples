import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { NewTestService } from './newtest.service';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {
  constructor(
    @Inject('FUNC') public aaa: any,
    private testService: TestService,
    private newTestService: NewTestService
  ) {
    console.log(aaa);

    // setInterval(() => {
    //   console.log('testService', this.testService.add());
    //   console.log('newTestService', this.newTestService.add());
    // }, 100)
  }
}
