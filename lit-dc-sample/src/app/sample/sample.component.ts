import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SampleComponent {

}
