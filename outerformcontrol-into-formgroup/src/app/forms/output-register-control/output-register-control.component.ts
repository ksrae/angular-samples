import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'output-register-control',
  templateUrl: './output-register-control.component.html',
  styleUrls: ['./output-register-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputRegisterControlComponent implements OnInit {
  formGroup!: FormGroup;
  result: any;

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({});

    this.formGroup.valueChanges.subscribe(value => {
      this.onSubmit();
    });
  }

  addNameForm(control: FormControl) {
    control.setValidators(Validators.required);
    this.formGroup.registerControl('name', control);
  }

  addGenderForm(control: FormControl) {
    control.setValue(true);
    control.setValidators(Validators.requiredTrue);
    this.formGroup.registerControl('gender', control);
  }

  addTypeForm(control: FormControl) {
    control.setValue('aaa');
    this.formGroup.registerControl('type', control);
  }

  onSubmit() {
    this.result = {
      name: this.formGroup.value.name,
      gender: !this.formGroup.value.gender ? 'male': 'female',
      type: this.formGroup.value.type
    }

    console.log(this.formGroup);
  }

}
