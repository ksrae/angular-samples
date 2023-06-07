import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-tool-information-management',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './tool-information-management.component.html',
  styleUrls: ['./tool-information-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolInformationManagementComponent implements OnInit {
  langService = inject(LangService);

  ngOnInit(): void {
    this.langService.setApp('TOOL_INFORMATION_MANAGEMENT');

  }
}
