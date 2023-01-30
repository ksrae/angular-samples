import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  index = 0;

  add(): number {
    this.index+=1;
    return this.index;
  }
}
