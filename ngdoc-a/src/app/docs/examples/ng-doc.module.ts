import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { CustomButtonDemoComponent } from 'src/app/custom-button-demo/custom-button-demo.component';
import { ButtonDemoModule } from 'src/app/button-demo/button-demo.module';

@NgModule({
	imports: [CommonModule, ButtonDemoModule],
	// Declare you demo components here
	declarations: [CustomButtonDemoComponent],

})
export class ExamplesPageModule {}
