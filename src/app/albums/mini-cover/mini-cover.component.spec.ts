import { MiniCoverComponent } from './mini-cover.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AlbumCardComponent', () => {
  let fixure: ComponentFixture<MiniCoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniCoverComponent],
    });

    fixure = TestBed.createComponent(MiniCoverComponent);
  });

  it('should display the component correctly', () => {
    fixure.componentInstance.album = {
      id: 1,
      name: 'Album 1',
      genre: 'Genre 1',
      image: 'hello.jpg',
      songsList: [],
    };
    fixure.detectChanges();
  });
});
