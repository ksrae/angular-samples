import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'tab1', loadComponent: () => import('./src/tab/tab1/tab1.component').then(m => m.Tab1Component)},
  {path: 'tab2', loadComponent: () => import('./src/tab/tab2/tab2.component').then(m => m.Tab2Component)},
  {path: 'popup', outlet: 'popupType', loadComponent: () => import('./src/popup/popup.component').then(m => m.PopupComponent)},
];
