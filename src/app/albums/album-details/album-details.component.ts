import { AlbumDetails } from './../albums.model';
import { AlbumsService } from './../albums.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, startWith, switchMap } from 'rxjs/operators';
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
  playing: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.album$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedAlbumId = +params.get('id');
        return this.fetchAlbumDetails();
      })
    );
  }

  fetchAlbumDetails(): Observable<AlbumDetails> {
    return this.albumService.getAlbumDetails(this.selectedAlbumId).pipe(
      startWith(null),
      map((val, index) => {
        this.selectedSongId =
          index === 1 &&
          val.songsList &&
          val.songsList.length > 0 &&
          val.songsList[0].id;
        return val;
      })
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
