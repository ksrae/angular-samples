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
    // console.log(this.translateService.currentLang);

    // this.translateService.use(this.translateService.currentLang === 'aaa' ? 'bbb': 'aaa');

    this.translateService.get('hellomain').subscribe((a: any) => console.log({a}))
    this.translateService.getStreamOnTranslationChange('hellomain').subscribe((b: any) => console.log({b}))
    this.translateService.use(this.translateService.currentLang === 'ko' ? 'en': 'ko');
  }
  set() {
    this.translateService.set('hellomain', '카카카카<main>', 'en');
    // this.translateService.setTranslation('ko', {
    //   "hellomain": "카카카카 <main>",
    //   "hellosub": "서서서서 <sub>"
    // }, true);


  }
}
