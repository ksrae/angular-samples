import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'input-abstractcontrol',
  templateUrl: './input-abstractcontrol.component.html',
  styleUrls: ['./input-abstractcontrol.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputAbstractcontrolComponent implements OnInit {
  formGroup!: FormGroup;
  result: any;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      gender: [true, [Validators.requiredTrue]],
      type: ['aaa']
    });

    this.formGroup.valueChanges.subscribe(value => {
      this.onSubmit();
    });
  }

  onSubmit() {
    this.result = {
      name: this.formGroup.value.name,
      gender: !this.formGroup.value.gender ? 'male': 'female',
      type: this.formGroup.value.type
    };
  }
}
