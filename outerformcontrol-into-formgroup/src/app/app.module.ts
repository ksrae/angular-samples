import { FormGenderComponent } from './forms/output-register-control/form-gender/form-gender.component';
import { FormNameComponent } from './forms/output-register-control/form-name/form-name.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OutputRegisterControlComponent } from './forms/output-register-control/output-register-control.component';
import { InputAbstractcontrolComponent } from './forms/input-abstractcontrol/input-abstractcontrol.component';
import { DefaultFormgroupComponent } from './forms/default-formgroup/default-formgroup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormName2Component } from './forms/input-abstractcontrol/form-name/form-name.component';
import { FormGender2Component } from './forms/input-abstractcontrol/form-gender/form-gender.component';
import { FormSelectComponent } from './forms/output-register-control/form-select/form-select.component';
import { FormTypeComponent } from './forms/input-abstractcontrol/form-type/form-type.component';

@NgModule({
  declarations: [
    AppComponent,
    OutputRegisterControlComponent,
    InputAbstractcontrolComponent,
    DefaultFormgroupComponent,
    FormName2Component,
    FormGender2Component,
    FormNameComponent,
    FormGenderComponent,
    FormSelectComponent,
    FormTypeComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
