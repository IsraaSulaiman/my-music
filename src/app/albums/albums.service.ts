import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album, AlbumDetails } from './albums.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  getUrl(relative?: string): string {
    return relative ? `/api/albums/${relative}` : `/api/albums`;
  }

  getAll(): Observable<Album[]> {
    return this.http.get<Album[]>(this.getUrl('all'));
  }

  getAlbumDetails(id: number): Observable<AlbumDetails> {
    return this.http.get<AlbumDetails>(this.getUrl(`details/${id}`));
  }
}
