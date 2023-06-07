import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'unsub', loadChildren: () => import('./unsub/unsub.module').then(m => m.UnsubModule) },
  { path: 'log', loadChildren: () => import('./log/log.module').then(m => m.LogModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
