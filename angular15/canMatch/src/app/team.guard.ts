import { Injectable } from "@angular/core";
import { CanMatch, Route, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class TeamGuard implements CanMatch {
  constructor() {}

  canMatch(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
    console.log('canMatch')
    return false;
  }
}
