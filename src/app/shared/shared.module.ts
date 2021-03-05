import { WavesIconComponent } from './waves.component';
import { SoundPlayerIcon } from './sound-player.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    SoundPlayerIcon,
    WavesIconComponent,
  ],
  imports: [CommonModule],
  exports: [
    NotFoundComponent,
    NavbarComponent,
    SoundPlayerIcon,
    WavesIconComponent,
  ],
})
export class SharedModule {}
