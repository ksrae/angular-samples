import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class ConfigService {
  constructor(
    private http: HttpClient,
  ) {}

  get config() {
    return this.http.get('assets/timezone.json');
  }
}
