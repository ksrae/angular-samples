import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateComponentComponent } from './translate-component/translate-component.component';
import { TranslateHtmlComponent } from './translate-html/translate-html.component';

const routes: Routes = [
  { path: '', children: [
    { path: '', redirectTo: 'html', pathMatch: 'full'},
    { path: 'html', component: TranslateHtmlComponent },
    { path: 'component', component: TranslateComponentComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
