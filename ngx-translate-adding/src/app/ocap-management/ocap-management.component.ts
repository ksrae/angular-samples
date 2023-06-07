import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from '../lang.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ocap-management',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './ocap-management.component.html',
  styleUrls: ['./ocap-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OcapManagementComponent implements OnInit {
  langService = inject(LangService);

  ngOnInit(): void {
    this.langService.setApp('OCAP_MANAGEMENT');

  }
}
