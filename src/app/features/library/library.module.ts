import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { ShelfComponent } from './components/shelf/shelf.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './reducers';

@NgModule({
  declarations: [LibraryComponent, ShelfComponent, BookDetailComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, reducers)
  ],
  exports: [
    LibraryComponent
  ]
})
export class LibraryModule { }
