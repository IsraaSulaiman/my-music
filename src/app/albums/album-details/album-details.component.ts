import { AlbumDetails } from './../albums.model';
import { AlbumsService } from './../albums.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit {
  album$: Observable<AlbumDetails>;
  selectedAlbumId: number;
  selectedSongId: number;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.album$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedAlbumId = +params.get('id');
        return this.fetchAlbumDetails();
      }),
      tap(
        (album) =>
          (this.selectedSongId =
            album.songsList &&
            album.songsList.length > 0 &&
            album.songsList[0].id)
      )
    );
  }

  fetchAlbumDetails(): Observable<AlbumDetails> {
    return this.albumService.getAlbumDetails(this.selectedAlbumId);
  }

  playSong(id: number): void {
    this.selectedSongId = id;
  }
}
