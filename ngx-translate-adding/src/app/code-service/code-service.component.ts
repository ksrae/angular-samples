import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-codeservice',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    // HttpClientModule
  ],
  templateUrl: './code-service.component.html',
  styleUrls: ['./code-service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  // translate = inject(TranslateService)
  // http = inject(HttpClient);
  langService = inject(LangService);

  ngOnInit(): void {
    this.langService.setApp('CODESERVICE');

  }

}
