import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { MiniCoverComponent } from './mini-cover/mini-cover.component';

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumDetailsComponent,
    AlbumCardComponent,
    AlbumsListComponent,
    MiniCoverComponent,
  ],
  imports: [CommonModule, AlbumsRoutingModule, SharedModule],
})
export class AlbumsModule {}
