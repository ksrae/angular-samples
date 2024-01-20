import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'remote-app', loadComponent: () =>
    loadRemoteModule('native-federation-remote-manifest', './Component').then((m) => m.AppComponent),
  },
  {path: 'remote-sample', loadComponent: () =>
  loadRemoteModule('native-federation-remote-manifest', './SampleComponent').then((m) => m.SampleComponent),
}
];
