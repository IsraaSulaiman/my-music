import { AlbumCardComponent } from './album-card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

describe('AlbumCardComponent', () => {
  let fixure: ComponentFixture<AlbumCardComponent>;
  let mockRouter;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj(['navigate']);
    TestBed.configureTestingModule({
      declarations: [AlbumCardComponent],
      providers: [{ provide: Router, useValue: mockRouter }],
    });

    fixure = TestBed.createComponent(AlbumCardComponent);
    fixure.componentInstance.album = {
      id: 1,
      name: 'Album 1',
      genre: 'Genre 1',
      image: 'hello.jpg',
    };
    fixure.componentInstance.selectedAlbum = 1;
    fixure.detectChanges();
  });

  it('should display the component correctly', () => {});

  it('should set class active to the card', () => {});

  it('should emit event when clicking on the card', () => {});
});
