import { AlbumsListComponent } from './albums-list.component';
import { AlbumsService } from './../albums.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AlbumCardComponent', () => {
  let fixure: ComponentFixture<AlbumsListComponent>;
  let mockService;

  beforeEach(() => {
    mockService = jasmine.createSpyObj(['getAll', 'getAlbumDetails']);
    TestBed.configureTestingModule({
      declarations: [AlbumsListComponent],
      providers: [{ provide: AlbumsService, useValue: mockService }],
    });

    fixure = TestBed.createComponent(AlbumsListComponent);
  });

  //Test interaction with service

  //Test template with aysnc
});
