import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ObsWithLoader } from './obs-with-loading.pipe';
@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    SpinnerComponent,
    ObsWithLoader,
  ],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    SpinnerComponent,
    ObsWithLoader,
  ],
})
export class SharedModule {}
