import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InjectionService } from './injection.service';
import { ChildComponent } from './child/child.component';
import { InstanceClass } from './instance.class';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'class-instance';
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

    const ica = new InstanceClass();
    ica.setAll(20,20);

    console.log(
      'appComponent class1 sum',
      ica.sum()
    );

    console.log(
      'appComponent class1 take',
      ica.take()
    );


    const icb = new InstanceClass();
    icb.setAll(50,100);

    console.log(
      'appComponent class2 sum',
      icb.sum()
    );

    console.log(
      'appComponent class2 take',
      icb.take()
    );
  }
}
