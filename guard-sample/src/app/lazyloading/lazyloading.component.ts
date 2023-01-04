import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyloading',
  templateUrl: './lazyloading.component.html',
  styleUrls: ['./lazyloading.component.scss']
})
export class LazyloadingComponent implements OnInit {
  ngOnInit(): void {
    console.log('lazyloadiong');
  }
}
