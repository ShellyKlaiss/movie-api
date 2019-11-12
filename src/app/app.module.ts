import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from  '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchListComponent } from './watch-list/watch-list.component';

import { SearchCriteriaService } from  './search-criteria/search-criteria.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    MovieListComponent,
    WatchListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // appRoutes
  ],
  providers: [
    SearchCriteriaService
  ],
  bootstrap: [AppComponent]
})

// const appRoutes: Routes = [
//   {path: 'home', component: AppComponent}
// ]
export class AppModule { }
