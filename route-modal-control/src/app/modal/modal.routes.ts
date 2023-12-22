import { Routes } from '@angular/router';
import { HelloModalComponent } from './hellomodal/hellomodal.component';
import { SamplemodalComponent } from './samplemodal/samplemodal.component';

export const modalRoutes: Routes = [
  {path: 'hellomodal', component: HelloModalComponent},
  {path: 'samplemodal', component: SamplemodalComponent}
];
