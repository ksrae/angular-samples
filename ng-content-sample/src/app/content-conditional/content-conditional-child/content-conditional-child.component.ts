import { ChangeDetectionStrategy, Component, ContentChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContentConditionalDirective } from '../content-conditional.directive';

@Component({
  selector: 'content-conditional-child',
  templateUrl: './content-conditional-child.component.html',
  styleUrls: ['./content-conditional-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentConditionalChildComponent {
  @ContentChild(ContentConditionalDirective) content!: ContentConditionalDirective;
  expanded$ = new BehaviorSubject<boolean>(true);

  constructor(
  ) {
    setInterval(() => {
      this.expanded$.next(!this.expanded$.getValue());
    }, 100)
  }
}
