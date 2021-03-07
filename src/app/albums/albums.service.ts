import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album, AlbumDetails } from './albums.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private albumsUrl = '/api/albums/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.albumsUrl}/all`);
  }

  getAlbumDetails(id: number): Observable<AlbumDetails> {
    return this.http.get<AlbumDetails>(`${this.albumsUrl}/details/${id}`);
  }
}
