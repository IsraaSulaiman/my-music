import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumsComponent } from './albums.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
    children: [
      {
        path: ':id',
        component: AlbumDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}
