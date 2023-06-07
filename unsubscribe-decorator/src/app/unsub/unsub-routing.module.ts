import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsubComponent } from './unsub.component';

const routes: Routes = [{ path: '', component: UnsubComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnsubRoutingModule { }
