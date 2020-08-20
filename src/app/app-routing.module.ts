import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
{ path: 'aa', component: ImageComponent },
{ path: 'fav', component: FavouritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
