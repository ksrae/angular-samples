import { Injectable } from '@angular/core';

@Injectable()
export class NewTestService {
  index = 0;

  add(): number {
    this.index+=10;
    return this.index;
  }
}
