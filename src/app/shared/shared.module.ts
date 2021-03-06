import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [NotFoundComponent, HeaderComponent, SpinnerComponent],
})
export class SharedModule {}
