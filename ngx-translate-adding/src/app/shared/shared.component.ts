import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedComponent implements OnInit {
  langService = inject(LangService);

  ngOnInit(): void {
    this.langService.setApp('SHARED');

  }
}
