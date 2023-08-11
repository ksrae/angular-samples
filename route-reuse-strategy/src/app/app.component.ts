import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'route-reuse-strategy';
  onActivate(a: any) {
    console.log('activate', {a});
  }
  onDeactivate(b: any) {
    console.log('deactivate', {b});
  }
  // onAttach(a: any) {
  //   console.log('attach', {a});
  // }
  // onDetach(a: any) {
  //   console.log('detach', {a});
  // }
}
