import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-ocap-result-view',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './ocap-result-view.component.html',
  styleUrls: ['./ocap-result-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OcapResultViewComponent implements OnInit {
  langService = inject(LangService);

  ngOnInit(): void {
    this.langService.setApp('OCAP_RESULT_VIEW');

  }
}
