import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AlbumDetails } from '../albums.model';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent {
  @Input() album: AlbumDetails;
  @Input() selectedAlbum: number;
  @Output() selectedAlbumChange: EventEmitter<null> = new EventEmitter();

  constructor(private router: Router) {}

  handleClick() {
    screen.width <= 640
      ? this.router.navigate(['/albums', this.album.id])
      : this.selectedAlbumChange.emit();
  }
}
