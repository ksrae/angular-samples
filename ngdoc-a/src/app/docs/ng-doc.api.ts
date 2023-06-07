import {NgDocApi} from '@ng-doc/core';
import GettingStartedCategory from './getting-searted/ng-doc.category';

const Api: NgDocApi = {
	title: 'API',
  category: GettingStartedCategory,
	scopes: [
		// Add the paths to the source code of your project, based on which you want to generate the API here
    {
      name: 'example-library',
      route: 'examlibrary',
      include: 'src/app/sample.model.ts',
    },
	],
};

export default Api;
