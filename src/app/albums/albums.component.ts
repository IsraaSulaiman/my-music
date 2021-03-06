import { Component } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent {
  public selectedAlbumId: number;

  get showDetails() {
    return screen.width > 640;
  }
}
