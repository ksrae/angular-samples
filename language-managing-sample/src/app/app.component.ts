import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'language-managing-sample';


  constructor(private translateService: TranslateService) {
    this.translateService.use('ko');
  }

  change(e: Event) {
    e.preventDefault();
    if(this.translateService.currentLang === 'ko') {
      this.translateService.use('en');
    } else {
      this.translateService.use('ko');
    }
  }
}
