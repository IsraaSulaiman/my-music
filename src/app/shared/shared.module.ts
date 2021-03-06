import { RouterModule } from '@angular/router';
import { WavesIconComponent } from './waves.component';
import { SoundPlayerIcon } from './sound-player.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ObsWithStatusPipe } from './obs-with-status.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    SoundPlayerIcon,
    WavesIconComponent,
    SpinnerComponent,
    ObsWithStatusPipe,
  ],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    SoundPlayerIcon,
    WavesIconComponent,
    SpinnerComponent,
    ObsWithStatusPipe,
  ],
})
export class SharedModule {}
