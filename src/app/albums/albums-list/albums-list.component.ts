import { AlbumsService } from '../albums.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../albums.model';
import { map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss'],
})
export class AlbumsListComponent implements OnInit {
  albums$: Observable<Album[]>;
  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.albums$ = this.albumsService.getAll().pipe(
      map((list) => list.sort(this.sortDescById)),
      tap(
        (list) =>
          list.length > 0 &&
          this.router.navigate([list[0].id], { relativeTo: this.route })
      )
    );
  }
  sortDescById(a, b) {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  }
}
