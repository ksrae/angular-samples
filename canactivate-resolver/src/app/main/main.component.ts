import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'canactivate-resolver';
  isLogin!: boolean;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLogin = this.route.snapshot.data['data'];
  }

}
