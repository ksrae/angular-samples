import { CommonTranslateService } from './../services/common-translate.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private translateService: CommonTranslateService,
    // private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  change1() {
    console.log(this.translateService.currentLang);
    this.translateService.use(this.translateService.currentLang === 'ko' ? 'en': 'ko');
  }
}
