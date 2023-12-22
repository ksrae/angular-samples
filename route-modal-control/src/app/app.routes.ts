import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', children: [
    {path: 'modal', loadChildren: () => import('./modal/modal.routes').then(m => m.modalRoutes)},
  ]}
];
