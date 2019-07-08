import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './models';
import { Store } from '@ngrx/store';
import { selectBooks, State } from './reducers';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  books$: Observable<Book[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.books$ = this.store.select(selectBooks);
  }
}
