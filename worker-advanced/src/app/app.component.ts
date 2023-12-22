import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WorkerController } from '../worker/worker.controller';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'worker-advanced';
  worker = new WorkerController();
  readonly worker$ = new Subject<void>(); // subscription

  ngOnInit(): void {
    this.worker.worker$.pipe(
      tap((response: any) => {
        console.log({response});
      }),
      takeUntil(this.worker$) // subscription
    ).subscribe();
  }

  calculate() {
    this.worker.calculate();
  }

  ngOnDestroy() {
    this.worker$.next(); // unsubscription
    this.worker$.complete();
  }
}
