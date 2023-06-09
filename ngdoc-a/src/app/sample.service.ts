import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class SampleService {
  vala = '';

  constructor() {}

  getValue() {
    return this.vala;
  }

  setValue(val: string) {
    this.vala = val;
  }
}
