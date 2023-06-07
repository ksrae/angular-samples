import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TempComponent } from './temp/temp.component';


@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    TempComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-translate-adding';
  translate = inject(TranslateService)


  ngOnInit(): void {
    console.log('[[[[[app.component]]]]]');
    this.translate.defaultLang = 'ko';
    this.translate.use('ko');
  }
  lang(lang: 'ko' | 'en') {
    this.translate.use(lang);
  }


}
