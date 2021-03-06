import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  handleClick() {
    this.selectedAlbumChange.emit();
  }
}
