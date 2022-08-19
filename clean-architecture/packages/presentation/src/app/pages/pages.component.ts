import { IData } from '@data/data.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  sample!: IData;

  constructor(

  ) { }

  ngOnInit(): void {
    this.sample = {
      name: 'test',
      content: 'this is content'
    }
  }

}
