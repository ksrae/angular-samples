import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-test';

  resultA = false;
  resultB!: void;
  index = 0;

  setResultA() {
    this.resultA = !this.resultA;
  }

  setResultB() {
    if(this.index > 0) {

      this.index = 0;
    } else {
      this.index += 1;
    }
  }
}
