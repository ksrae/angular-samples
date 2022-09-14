import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [NxWelcomeComponent],
  imports: [CommonModule],
  exports: [NxWelcomeComponent]
})
export class UiWelcomeModule {}
