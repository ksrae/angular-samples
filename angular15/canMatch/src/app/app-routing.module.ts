import { CanMatch } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { TeamGuard } from './team.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'team/:id',
        loadChildren: () => import('./team/team.module').then(m => m.TeamModule),
        canMatch: [TeamGuard]
      },
      // {
      //   path: '**',
      //   component: NotfoundComponent
      // }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
