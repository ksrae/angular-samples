import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, map, interval, of, shareReplay, take } from 'rxjs';
import { BasicService } from './basic.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent implements OnInit {

  // shared$ = interval(2000).pipe(
  //   take(6),
  //   shareReplay(4)
  // );


  a$!: Observable<any>;
  b$!: Observable<any>;
  c$!: Observable<any>;

  constructor(
    private basicService: BasicService
  ) { }

  ngOnInit(): void {
    this.a$ = this.basicService.t$.pipe(
      map(x => {
        console.log('a', x)
        return x;
      })
    );

    this.a$ = this.basicService.t$.pipe(
      map(x => {
        console.log('b', x);
        return x;
      })
    )
  }

  newStart() {
    this.a$ = this.basicService.t$.pipe(
      map(x => {
        console.log('c', x);
        return x;
      })
    )
  }
}
