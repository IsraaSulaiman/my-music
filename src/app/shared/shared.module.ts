import { RouterModule } from '@angular/router';
import { WavesIconComponent } from './waves.component';
import { SoundPlayerIcon } from './sound-player.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    SoundPlayerIcon,
    WavesIconComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    SoundPlayerIcon,
    WavesIconComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
