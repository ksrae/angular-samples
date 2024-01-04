import {createApplication} from '@angular/platform-browser';
import {appConfig} from './main.config';
import {createCustomElement} from '@angular/elements';
import { MyLibraryComponent } from 'my-library';
import { ApplicationRef } from '@angular/core';

(async () => {
  const app: ApplicationRef = await createApplication(appConfig);

  // Define Web Components
  const myLibraryComponent = createCustomElement(MyLibraryComponent, {injector: app.injector});
  customElements.define('my-library-component', myLibraryComponent);
})();
