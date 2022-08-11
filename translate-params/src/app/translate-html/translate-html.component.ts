import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate-html',
  templateUrl: './translate-html.component.html',
  styleUrls: ['./translate-html.component.scss']
})
export class TranslateHtmlComponent implements OnInit {
  list = [
    {
      val: 'value1',
      saveload: 'save',
      action: 'success'
    },
    {
      val: 'value2',
      saveload: 'load',
      action: 'success'
    },
    {
      val: 'value3',
      saveload: 'save',
      action: 'fail'
    },
    {
      val: 'value4',
      saveload: 'load',
      action: 'fail'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
