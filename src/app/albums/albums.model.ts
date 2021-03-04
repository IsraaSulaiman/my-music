export interface Album {
  id: number;
  name?: string;
  image?: string;
  genre?: string;
}

export interface Song {
  id: number;
  name?: string;
  singer?: string;
  duration?: string;
}

export interface AlbumDetails extends Album {
  songList: Song[];
}
