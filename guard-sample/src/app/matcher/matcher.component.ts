import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-matcher',
  templateUrl: './matcher.component.html',
  styleUrls: ['./matcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatcherComponent implements OnInit {
  param$!: Observable<any>;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.param$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('username'))
    )
  }
}
