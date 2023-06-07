import { Component } from '@angular/core';
import config from '../assets/config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'read-json-file';
  countryList:{name:string, code:string}[] = config;
}
