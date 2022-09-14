import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'table-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataComponent implements OnInit {
  @ViewChild('pdf') pdfTable!: ElementRef;

  constructor() {}

  ngOnInit(): void {}


}
