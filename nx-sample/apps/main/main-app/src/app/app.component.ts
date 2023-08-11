import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nx-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'main-main-app';
  lang = 'ko';
  constructor(
    private translateService: TranslateService,
  ) {}
  ngOnInit(): void {
    console.log('main');
    this.translateService.use('ko');
  }

  changeLang() {
    this.translateService.use(this.lang === 'ko' ? 'en': 'ko');
  }
}
