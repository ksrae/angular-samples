import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'default-formgroup',
  templateUrl: './default-formgroup.component.html',
  styleUrls: ['./default-formgroup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultFormgroupComponent implements OnInit {
  formGroup!: FormGroup;
  result: any;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      gender: [true],
      type: ['aaa']
    });

    this.formGroup.valueChanges.subscribe(value => {
      this.onSubmit();
    });
  }

  onSubmit() {
    this.result = {
      ...this.formGroup.value,
      gender: !this.formGroup.value.gender ? 'male': 'female'
    }
  }

}
