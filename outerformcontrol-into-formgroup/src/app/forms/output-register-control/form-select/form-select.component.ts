import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSelectComponent implements AfterViewInit {
  @Output() control = new EventEmitter();
  selectControl = new FormControl();

  constructor() { }

  ngAfterViewInit(): void {
    this.control.emit(this.selectControl);
  }
}
