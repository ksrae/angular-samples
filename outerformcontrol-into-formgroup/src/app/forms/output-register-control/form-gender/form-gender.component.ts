import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-gender',
  templateUrl: './form-gender.component.html',
  styleUrls: ['./form-gender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGenderComponent implements AfterViewInit {
  @Output() control = new EventEmitter();
  genderControl = new FormControl();
  constructor() { }

  ngAfterViewInit(): void {
    this.control.emit(this.genderControl);
  }

}
