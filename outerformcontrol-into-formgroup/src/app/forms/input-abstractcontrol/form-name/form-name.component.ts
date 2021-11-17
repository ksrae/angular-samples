import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'form-name2',
  templateUrl: './form-name.component.html',
  styleUrls: ['./form-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormName2Component{
  @Input('control') set setFormControl(control: AbstractControl) {
    this.nameControl = control as FormControl;
  }
  nameControl!: FormControl;

  constructor() { }

}
