import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent, NotFoundComponent],
  imports: [CommonModule],
  exports: [NotFoundComponent, NavbarComponent],
})
export class SharedModule {}
