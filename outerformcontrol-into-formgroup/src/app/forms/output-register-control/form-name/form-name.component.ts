import { Component, OnInit, ChangeDetectionStrategy, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-name',
  templateUrl: './form-name.component.html',
  styleUrls: ['./form-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNameComponent implements AfterViewInit {
  @Output() control = new EventEmitter();
  nameControl = new FormControl();

  constructor() { }

  ngAfterViewInit(): void {
    this.control.emit(this.nameControl);
  }

}
