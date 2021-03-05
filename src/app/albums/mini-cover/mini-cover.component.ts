import { AlbumDetails } from './../albums.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-cover',
  templateUrl: './mini-cover.component.html',
  styleUrls: ['./mini-cover.component.scss'],
})
export class MiniCoverComponent {
  @Input() album: AlbumDetails;
}
