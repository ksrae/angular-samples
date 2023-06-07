import { CustomButtonDemoComponent } from './../../custom-button-demo/custom-button-demo.component';
import { ButtonDemoComponent } from './../../button-demo/button-demo.component';
import {NgDocPage} from '@ng-doc/core';
import {ExamplesPageModule} from './ng-doc.module';
import GettingStartedCategory from '../getting-searted/ng-doc.category';

const ExamplesPage: NgDocPage = {
	title: `Examples`,
	mdFile: './index.md',
  imports: [ExamplesPageModule],
  // category: GettingStartedCategory,
  demos: {ButtonDemoComponent, CustomButtonDemoComponent}
};

export default ExamplesPage;
