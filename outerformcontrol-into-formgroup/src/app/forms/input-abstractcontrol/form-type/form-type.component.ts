import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'form-type',
  templateUrl: './form-type.component.html',
  styleUrls: ['./form-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTypeComponent {
  @Input('control') set setFormControl(control: AbstractControl) {
    this.typeControl = control as FormControl;
  }
  typeControl!: FormControl;

  constructor() { }
}
