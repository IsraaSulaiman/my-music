import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';

@NgModule({
  declarations: [AlbumsComponent, AlbumDetailsComponent, AlbumCardComponent, AlbumsListComponent],
  imports: [CommonModule, AlbumsRoutingModule],
})
export class AlbumsModule {}
