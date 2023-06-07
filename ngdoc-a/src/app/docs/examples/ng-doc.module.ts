import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ButtonDemoComponent } from 'src/app/button-demo/button-demo.component';
import { NgDocButtonComponent } from '@ng-doc/ui-kit';
import { CustomButtonDemoComponent } from 'src/app/custom-button-demo/custom-button-demo.component';

@NgModule({
	imports: [CommonModule, NgDocButtonComponent],
	// Declare you demo components here
	declarations: [ButtonDemoComponent, CustomButtonDemoComponent],
})
export class ExamplesPageModule {}
