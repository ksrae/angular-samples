import { ChangeDetectorRef, Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'nx-native-federation-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-native-federation';
  cdr = inject(ChangeDetectorRef);

	// 이 위치에 remote component를 가져올 예정이므로 ViewChild로 dom 정보를 가져옴. 반드시 read, static 설정해야 함.
  @ViewChild('remote', {read: ViewContainerRef, static: true}) viewContainer!: ViewContainerRef;

  async openDynamic() {
    const remoteComponent = await loadRemoteModule({
			// manifest가 없으면 반드시 필요함. module federation에서는 remoteEntry.js였으나 .json으로 변경됨.
      remoteEntry: 'http://localhost:4202/remoteEntry.json', 
			// remote에서 정의된 노출할 component의 키값
      exposedModule: './DynamicComponent',
			// 노출할 프로젝트 명. 반드시 angular.json의 프로젝트명, package.json의 name과 동일해야 함.
      remoteName: 'native-federation-remote-dynamic',
    }).then(m => m.DynamicComponent); // remote에 정의된 노출할 component

    this.viewContainer.createComponent(remoteComponent);
    this.cdr.markForCheck(); // changeDetection이 OnPush이면 수동으로 밀어줘야 함.
  }
}
