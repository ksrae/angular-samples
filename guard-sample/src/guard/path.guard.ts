import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PathGuard implements CanActivate, CanActivateChild, CanDeactivate<boolean>, CanLoad {
  constructor(
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    console.log('canActivate');
    // 매번 실행됨
    // return this.router.parseUrl('/path2');
    return true;
  }

  canActivateChild( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    console.log('canActivateChild');
    // 매번 실행됨
    return true;
  }
  canDeactivate() {
    console.log('canDeactivate');
    // 매번 실행됨
    return true;
  }
  canLoad(): Observable<boolean>|Promise<boolean>|boolean {
    console.log('canLoad');
    return true;
  }
}
