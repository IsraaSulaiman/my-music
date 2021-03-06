import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/operators';

import { sortDescById } from '../../shared/utils/sortDescById';
import { AlbumDetails } from './../albums.model';
import { AlbumsService } from './../albums.service';
@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnChanges {
  @Input() selectedAlbumId: number;
  album: AlbumDetails;
  selectedSongId: number;
  playing: boolean = true;
  isLoading = false;
  errorMsg = '';

  constructor(private albumService: AlbumsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedAlbumId.currentValue) {
      this.fetchAlbumDetails(changes.selectedAlbumId.currentValue);
    }
  }

  fetchAlbumDetails(id: number) {
    this.errorMsg = '';
    this.isLoading = true;

    return this.albumService
      .getAlbumDetails(id)
      .pipe(
        map((val, index) => {
          let songs = val.songsList;
          if (songs && songs.length > 0) {
            val.songsList = songs.sort(sortDescById);
            this.selectedSongId = index === 0 && val.songsList[0].id;
          }
          return val;
        })
      )
      .subscribe(
        (resp: AlbumDetails) => {
          this.isLoading = false;
          this.album = resp;
        },
        (err) => {
          if (err.status === 404) this.errorMsg = 'Album Not Found';
          this.isLoading = false;
        }
      );
  }

  playSong(id: number): void {
    this.selectedSongId = id;
    this.playing = true;
  }

  trackByFn(index, item): number {
    return item.id;
  }
}
