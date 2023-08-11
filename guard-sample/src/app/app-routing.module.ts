import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { PathGuard } from 'src/guard/path.guard';
import { MatcherComponent } from './matcher/matcher.component';
import { ChildComponent } from './parent/child/child.component';
import { Path1Component } from './path1/path1.component';
import { Path2Component } from './path2/path2.component';

const routes: Routes = [
  {path: 'path1', component: Path1Component, canLoad: [PathGuard], canActivate: [PathGuard], title: 'PATH1'},
  {path: 'path2', component: Path2Component, canDeactivate: [PathGuard] },
  {component: MatcherComponent, canLoad: [PathGuard], canActivate: [PathGuard],
    matcher: (url) => {
      if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
        return {
          consumed: url,
          posParams: {
            username: new UrlSegment(url[0].path.slice(1), {})
          }
        };
      }

      return null;
    }
  },
  {path: 'parent', canActivateChild: [PathGuard], children: [
    {path: '', redirectTo: 'child', pathMatch: 'prefix' },
    {path: 'child', component: ChildComponent },
  ]},
  { path: 'lazyloading', canLoad: [PathGuard], canActivate: [PathGuard], loadChildren: () => import('./lazyloading/lazyloading.module').then(m => m.LazyloadingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
