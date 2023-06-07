import {TranslateLoader} from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';
import { Observable , forkJoin} from 'rxjs';
import { map } from 'rxjs/operators';

export class CustomLoader implements TranslateLoader {
  constructor(private http: HttpClient) {

  }
  getTranslation(langCountry: string): Observable<any> {
    // Condition satisfies upon page load. com.json is loaded.
    // if (!langCountry.includes('_')) {

    // }
    console.log({langCountry});
    return this.http.get(`/assets/i18n/${langCountry}.json`);
    // When specific country is selected below code is excuted.
    // Example - When India is selected com.json and com_IN.json are loaded.
    // Both the responses are combined together and a single response is returned
  //   const arr = langCountry.split('_');
  //   return forkJoin(
  //     this.http.get('/assets/i18n/common/' + arr[0] + '.json'),
  //     this.http.get('/assets/i18n/' + arr[1] + '/' + langCountry + '.json'))
  //     .pipe(map(data => {
  //       const res = {};
  //       data.forEach((obj) => {
  //         Object.assign(res, obj);
  //       });
  //       return res;
  //     }));
  }
}
