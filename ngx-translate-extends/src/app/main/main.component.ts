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
    private translateService: TranslateService,
    // private translateService: TranslateService
  ) { }

  ngOnInit() {
    // this.translateService.setDefaultLang('en');
    // this.translateService.use('en');

  }

  change1() {
    // this.translateService.use(this.translateService.currentLang === 'ko' ? 'en': 'ko');

    // this.translateService.getTranslation(this.translateService.currentLang).subscribe(res => {
    //   console.log(res);

    // });
  }
}
