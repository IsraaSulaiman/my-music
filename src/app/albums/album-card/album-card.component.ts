import { Component, Input, OnInit } from '@angular/core';
import { AlbumDetails } from '../albums.model';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit {
  @Input() album: AlbumDetails;

  constructor() {}

  ngOnInit(): void {}
}
