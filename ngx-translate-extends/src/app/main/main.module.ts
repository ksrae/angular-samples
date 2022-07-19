import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonTranslateService } from '../services/common-translate.service';
import { SharedModule } from '../shared.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/main/', '.json');
}


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    MainRoutingModule,
    SharedModule
  ],
  providers:[

  ]
})
export class MainModule { }
