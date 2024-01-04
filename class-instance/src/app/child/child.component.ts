import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectionService } from '../injection.service';
import { InstanceClass } from '../instance.class';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: ``,

})
export class ChildComponent implements OnInit {
  instanceClass = new InstanceClass();



  constructor(
    private injectionService: InjectionService,

  ) {}

  ngOnInit(): void {
    // this.injectionService.setAll(20,20);

    // console.log(
    //   'appComponent sum',
    //   this.injectionService.sum()
    // );

    // console.log(
    //   'appComponent take',
    //   this.injectionService.take()
    // );

    this.instanceClass.setAll(500,100);
    console.log(
      'appComponent class sum',
      this.instanceClass.sum()
    );

    console.log(
      'appComponent class take',
      this.instanceClass.take()
    );
  }
}
