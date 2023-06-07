import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgDocButtonComponent, NgDocNotifyService } from '@ng-doc/ui-kit';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ButtonDemoComponent {

  /* NgDocCodeSnippetStart(Constructor Block) */
  constructor(
    private readonly notifyService: NgDocNotifyService
  ) {}
  /* NgDocCodeSnippetEnd(Constructor Block) */



  /* NgDocCodeSnippetStart(clickEvent) */
  clickEvent(): void {
    this.notifyService.notify('Button was clicked!');
  }

  /* NgDocCodeSnippetEnd(clickEvent) */
}
