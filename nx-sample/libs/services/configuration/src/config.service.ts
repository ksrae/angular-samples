import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { first, mergeMap, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CustomTranslateHttpLoader implements TranslateLoader {
  constructor(
    private httpClient: HttpClient
  ) {}

  getTranslation(lang: string): Observable<any> {
    return this.httpClient.get('./assets/config.json').pipe(
      first(),
      mergeMap((res: any) => {
        let url = `/assets/i18n/`;
        if(res.company) {
          url += (res.company ?? '');
        }

        return this.httpClient.get(`${url}/${lang}.json`).pipe(first());

      })
    )
  }
}
