import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-tpc',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './tpc.component.html',
  styleUrls: ['./tpc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TpcComponent implements OnInit {
  langService = inject(LangService);

  ngOnInit(): void {
    this.langService.setApp('TPC');

  }
}
