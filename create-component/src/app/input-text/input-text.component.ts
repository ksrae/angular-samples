import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <input type="text" [formControl]="name" (blur)="setName()">
    <p>{{value}}</p>
    <button (click)="remove()">REMOVE</button>
    <br/>
    <br/>
    <br/>
    <br/>
  `,
})
export class InputTextComponent {
  @Input() set defaultName(value: string) {
    this.name.setValue(value);
  }

  name = new FormControl('');
  value: string = '';

  setName() {
    this.value = this.name.value ?? '';
  }
  remove() {
    console.log('remove');
  }
}
