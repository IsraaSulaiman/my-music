import { AlbumsService } from '../albums.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../albums.model';
import { map, tap } from 'rxjs/operators';

import { sortDescById } from '../../shared/utils/sortDescById';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss'],
})
export class AlbumsListComponent implements OnInit {
  @Input() selectedId: number;
  @Output() selectedIdChange: EventEmitter<number> = new EventEmitter();
  albums$: Observable<Album[]>;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albums$ = this.albumsService.getAll().pipe(
      map((list) => list.sort(sortDescById)),
      tap((list) => {
        if (screen.width <= 640) return;
        list.length > 0 && this.selectedIdChange.emit(+list[0].id);
      })
    );
  }

  onSelectedAlbumChange(id) {
    this.selectedIdChange.emit(id);
  }

  trackByFn(index, item): number {
    return item.id;
  }
}
