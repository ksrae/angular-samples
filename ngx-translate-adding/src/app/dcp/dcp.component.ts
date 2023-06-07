import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-dcp',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './dcp.component.html',
  styleUrls: ['./dcp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DCPComponent {
  langService = inject(LangService);

  ngOnInit(): void {
    this.langService.setApp('DCP');

  }
}
