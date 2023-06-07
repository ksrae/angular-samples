import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonTranslateService } from './services/common-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-translate-extends';

  constructor(
    private translateService: TranslateService,
    // private translateService: TranslateService
  ) {}

  ngOnInit() {
      this.translateService.setDefaultLang('aaa');
      this.translateService.use('aaa');
  }

  change() {
    console.log(this.translateService.currentLang);

    this.translateService.use(this.translateService.currentLang === 'aaa' ? 'bbb': 'aaa');
  }
}
