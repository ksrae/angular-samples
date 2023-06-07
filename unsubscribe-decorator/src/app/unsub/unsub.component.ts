import { UnsubService } from './unsub.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, share, tap } from 'rxjs';
import { SubService } from '../sub.service';
import { AutoUnsub } from './unsub';

@Component({
  selector: 'app-unsub',
  templateUrl: './unsub.component.html',
  styleUrls: ['./unsub.component.scss']
})
@AutoUnsub(UnsubService)
export class UnsubComponent implements OnInit, OnDestroy {
  products$!: Observable<any>;

  constructor(
    private subService: SubService,
    private unsubService: UnsubService,
  ) {}
  ngOnInit() {
    this.products$ = this.subService.products$.pipe(
      tap(prod => console.log({prod})),

    );
    this.unsubService.add = this.subService.users$.pipe(
      tap(u => console.log({u})),
    ).subscribe();
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
