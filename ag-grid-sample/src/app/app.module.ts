import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { AgGridModule } from 'ag-grid-angular';
import { DefaultColDefComponent } from './default-col-def/default-col-def.component';
import { CustomLoaderComponent } from './custom-loader/custom-loader.component';
import { AgGridCustomLoaderComponent } from './custom-loader/ag-grid-custom-loader/ag-grid-custom-loader.component';
import { EditByOuterCommandComponent } from './edit-by-outer-command/edit-by-outer-command.component';
import { CellEditorComponent } from './edit-by-outer-command/cell-editor/cell-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    DefaultColDefComponent,
    CustomLoaderComponent,
    AgGridCustomLoaderComponent,
    EditByOuterCommandComponent,
    CellEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
