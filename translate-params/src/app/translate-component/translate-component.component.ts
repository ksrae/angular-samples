import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest, first, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-translate-component',
  templateUrl: './translate-component.component.html',
  styleUrls: ['./translate-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TranslateComponentComponent implements OnInit {
  hello$!: Observable<string>;
  success$!: Observable<string>;
  list$!: Observable<string[]>;

  result$: Observable<string[]>[] = [];

  list = [
    {
      val: 'value1',
      saveload: 'save',
      action: 'success'
    },
    {
      val: 'value2',
      saveload: 'load',
      action: 'success'
    },
    {
      val: 'value3',
      saveload: 'save',
      action: 'fail'
    },
    {
      val: 'value4',
      saveload: 'load',
      action: 'fail'
    },
  ];

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.changeLang();

    this.translateService.onLangChange.subscribe(() => {
      this.changeLang();
    })
  }

  changeLang() {
    this.setHello();
    this.setTest();
    this.setList();
  }

  setHello() {
    this.hello$ = this.translateService.stream('hello').pipe(
      map(val => {
        return `<p>${val}</p>`;
      })
    )
  }

  setTest() {
    this.translateService.stream('test').pipe(
      tap(val => {
        this.success$ = this.translateService.stream('success', {val}).pipe(
          map(res => {
            return res;
          })
        );
      })
    ).subscribe();
  }

  setList() {
    this.result$ = [];

    for(const item of this.list) {
      combineLatest([
        this.translateService.stream(item.val),
        this.translateService.stream(item.saveload),
        this.translateService.stream(item.action)
      ]).pipe(
        first(),
        tap(([
          val,saveload, action
        ]) => {
          this.result$.push(this.translateService.stream('result', {val, saveload, action}).pipe(map(result => result)));
        })
      ).subscribe();
    }

  }
}
