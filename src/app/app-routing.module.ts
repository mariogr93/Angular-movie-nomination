import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { NomineesComponent } from './nominees/nominees.component';

const routes: Routes = [
  {
    path: '',
    component: MovieSearchComponent,
  },
  {
    path: 'movies/nominees',
    component: NomineesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
