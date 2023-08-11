import { OnInit, Component } from '@angular/core';
import { DeepCopyService } from './deep-copy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'deep-copy-function';
  original1 = {};
  copy1: any;
  deepcopy1: any;

  original2 = {};
  copy2: any;
  deepcopy2: any;

  original3 = {};
  copy3: any;
  deepcopy3: any;

  constructor(
    private deepCopyService: DeepCopyService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  test1() {
    this.original1 = {
      test1: 'test1'
    };

    this.copy1 = this.original1;
    this.copy1.test1 = 'copy';
    this.deepcopy1 = this.deepCopyService.cloneObject(this.original1);
    this.deepcopy1.test1 = 'deepcopy';
  }

  test2() {
    this.original2 = {
      test2: {
        test21: {
          test211: 111,
          test212: 'test112'
        }
      }
    };

    this.copy2 = this.original2;
    this.copy2.test2.test21.test212 = 'copy';
    this.deepcopy2 = this.deepCopyService.cloneObject(this.original2);
    this.deepcopy2.test2.test21.test212 = 'deepcopy';
  }
  test3() {
    this.original3 = [
      {
        test31: {
          test311: {
            test3111: 111,
            test3112: 'test3112'
          }
        }
      },
      {
        test32: {
          test321: [
            {
              test3211: 111,
              test3212: 'test3212'
            }
          ]
        }
      }
    ];

    this.copy3 = this.original3;
    this.copy3[0].test31.test311.test3112 = 'copy';
    this.deepcopy3 = this.deepCopyService.cloneObject(this.original3);
    this.deepcopy3[1].test32.test321[0].test3212 = 'deepcopy';
  }
}
