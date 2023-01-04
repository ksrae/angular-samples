import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path2',
  templateUrl: './path2.component.html',
  styleUrls: ['./path2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Path2Component implements OnInit {
  ngOnInit() {
    console.log('path2component')
  }
}
