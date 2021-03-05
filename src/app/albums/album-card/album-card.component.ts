import { Component, Input } from '@angular/core';
import { AlbumDetails } from '../albums.model';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent {
  @Input() album: AlbumDetails;
}
