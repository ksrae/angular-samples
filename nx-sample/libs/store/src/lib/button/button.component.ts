import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() disabled!: boolean;
  @Input() text!: string;

  constructor() {}

  ngOnInit(): void {}

  clickEvent(e: MouseEvent) {
    console.log({e});
  }
}
