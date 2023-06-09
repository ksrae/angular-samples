import { CustomButtonDemoComponent } from './../../custom-button-demo/custom-button-demo.component';
import { ButtonDemoComponent } from './../../button-demo/button-demo.component';
import {NgDocPage} from '@ng-doc/core';
import {ExamplesPageModule} from './ng-doc.module';


const ExamplesPage: NgDocPage = {
	title: `Examples`,
	mdFile: './index.md',
  imports: [ExamplesPageModule],
  // category: GettingStartedCategory,
  demos: {ButtonDemoComponent, CustomButtonDemoComponent},
  keyword: 'Examples',
};

export default ExamplesPage;
