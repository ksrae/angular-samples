import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'native-federation-shell';
  cdr = inject(ChangeDetectorRef);

  @ViewChild('remote', {read: ViewContainerRef, static: true}) viewContainer!: ViewContainerRef;

  async openDynamic(e: any) {
    // const remoteComponent = await loadRemoteModule({
    //   // remoteEntry?: string;
    //   // remoteName?: string;
    //   // exposedModule: string;

    //   remoteEntry: 'http://localhost:8081/remoteEntry.json',
    //   exposedModule: './DynamicComponent',
    //   remoteName: 'native-federation-remote-dynamic',
    // }).then(m => m.DynamicComponent);

    const remoteComponent = await loadRemoteModule({
      remoteEntry: 'http://localhost:4206/remoteEntry.json',
      exposedModule: './Component',
      // remoteName: 'ttt2',
    }).then(m => m.AppComponent);

    const ref = this.viewContainer.createComponent(remoteComponent);
    this.cdr.markForCheck();
  }
}
