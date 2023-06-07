import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from '../lang.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ddms',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './ddms.component.html',
  styleUrls: ['./ddms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DdmsComponent implements OnInit{
  langService = inject(LangService);

  ngOnInit(): void {
    console.log('openDDMS')
    this.langService.setApp('DDMS_APP');

  }
}
