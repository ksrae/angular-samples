import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
