import {NgDocPage} from '@ng-doc/core';
import {InputDemoPageModule} from './ng-doc.module';
import { InputDemoModule } from 'src/app/input-demo/input-demo.module';
import { InputDemoComponent } from 'src/app/input-demo/input-demo.component';

const InputDemoPage: NgDocPage = {
	title: `InputDemo`,
	mdFile: './index.md',
  imports: [InputDemoPageModule, InputDemoModule],
  playgrounds: {
    InputPlayground: {
      target: InputDemoComponent,
      template: `<ng-doc-selector>my input</ng-doc-selector>`,
    },
  },
};

export default InputDemoPage;
