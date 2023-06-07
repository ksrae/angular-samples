import { first, tap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LangService {
  translate = inject(TranslateService);
  http = inject(HttpClient);

  openApp = '';

  constructor(
  ) {
  }

  init() {
    this.translate.onLangChange.subscribe(lang => {
      console.log('[[[[[onLangChange]]]]]');

      // get open menu list
      // addTranslation(menu);
      this.addTranslation('default');
      if(this.openApp) {
        this.addTranslation(this.openApp);
      }
    });
    this.translate.onTranslationChange.subscribe(values =>
      console.log('onTranslation', values.translations)
    );
  }

  setApp(appName: string) {
    this.openApp = appName;

    this.addTranslation(appName);
  }

  addTranslation(appName: string = 'default') {
    console.log('addTranslation', appName);

    this.http.get(`/assets/i18n/${appName}/${this.translate.currentLang}.json`).pipe(
      first(),
      tap(result => {
        this.translate.setTranslation(this.translate.currentLang, result, true);

      }),
      catchError(err => {
        console.log({err});
        return EMPTY;
      })
    ).subscribe();
  }

}
