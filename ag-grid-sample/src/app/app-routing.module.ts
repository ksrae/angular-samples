import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { DefaultColDefComponent } from './default-col-def/default-col-def.component';
import { CustomLoaderComponent } from './custom-loader/custom-loader.component';
import { EditByOuterCommandComponent } from './edit-by-outer-command/edit-by-outer-command.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'basic', component: BasicComponent},
    {path: 'defaultColDef', component: DefaultColDefComponent},
    {path: 'customLoader', component: CustomLoaderComponent},
    {path: 'editbyouter', component: EditByOuterCommandComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
