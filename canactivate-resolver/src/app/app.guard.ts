import { AppService } from './app.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate, Resolve<boolean> {
  constructor(
    private appService: AppService,
    private router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.appService.getData().pipe(
      map((res: boolean) => {
        if(res) {
          return true;
        } else {
          this.router.navigateByUrl('/login');
          return false;
        }
      }),
    );
  }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.appService.isLogin;
  }

}
