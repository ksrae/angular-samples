import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'translate-params';

  constructor(
    private translateService: TranslateService
  ) {}

  change(lang: 'ko' | 'en') {
    this.translateService.use(lang);
  }
}
