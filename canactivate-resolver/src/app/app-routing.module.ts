import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
  {
    path: '',
    // canActivateChild: [AppGuard],
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', canActivate: [AppGuard], resolve: {data: AppGuard}, loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
