import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'form-gender2',
  templateUrl: './form-gender.component.html',
  styleUrls: ['./form-gender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGender2Component {
  @Input('control') set setFormControl(control: AbstractControl) {
    this.genderControl = control as FormControl;
  }
  genderControl!: FormControl;

  constructor() { }
}
