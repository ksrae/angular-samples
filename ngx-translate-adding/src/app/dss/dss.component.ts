import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-dss',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './dss.component.html',
  styleUrls: ['./dss.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DssComponent implements OnInit {
  langService = inject(LangService);

  ngOnInit(): void {
    this.langService.setApp('DSS');

  }
}
