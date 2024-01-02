import { Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
<dialog open #modal>
  <h2>Popup</h2>
  <p>This is a popup content.</p>

  <a [routerLink]="['/', {outlets: {popupType: null}}]" >close</a>
  <button (click)="back($event)">
  Back
  </button>
  <button (click)="ok($event)">
  OK
  </button>
</dialog>
  `,
  styleUrl: './popup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupComponent implements OnInit {

  route = inject(Router);
  router = inject(ActivatedRoute);
  cdr = inject(ChangeDetectorRef);
  loc = inject(Location);


  parent = '';

  ngOnInit(): void {
    console.log(this.route, this.router.snapshot.url[0]);

  }

  back(e: any) {
    // routeroutlet의 name이 동일한 경우 location.back을 통해 뒤로 돌아가야 한다.
    // 그렇지 않으면 가장 마지막 순서의 routeroutlet이 실행된다.
    this.loc.back();

  }
  ok(e: any) {
    this.route.navigate(['/', { outlets: { popupType: null } }], {
      relativeTo: this.router.parent
    });
  }

}
