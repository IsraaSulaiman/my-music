import { AlbumDetails } from './../albums.model';
import { AlbumsService } from './../albums.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit {
  album$: Observable<AlbumDetails>;
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.album$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = +params.get('id');
        return this.fetchAlbumDetails();
      })
    );
  }

  fetchAlbumDetails(): Observable<AlbumDetails> {
    return this.albumService.getAlbumDetails(this.selectedId);
  }
}
