import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyLibraryService {
  value$ = new BehaviorSubject<string>('');

  setValue(value: string) {
    this.value$.next(`${value} modified by subject`);
  }
}
