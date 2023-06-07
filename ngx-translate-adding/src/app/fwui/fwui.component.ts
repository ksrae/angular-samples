import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-fwui',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './fwui.component.html',
  styleUrls: ['./fwui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FwuiComponent implements OnInit {
  langService = inject(LangService);

  ngOnInit(): void {
    this.langService.setApp('FWUI');

  }
}
