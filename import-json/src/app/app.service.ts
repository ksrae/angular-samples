import { Injectable } from "@angular/core";
import data from './app.json';


@Injectable({providedIn: 'root'})
export class AppService {

  jsonData: any;

  init() {
    this.jsonData = data;

    return this.jsonData;
  }

}
