import { Component, OnInit } from '@angular/core';
import { BookAdded } from '../../actions/shelf.actions';
import { State } from '../../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  addBook(title: HTMLInputElement, last: HTMLInputElement, first: HTMLInputElement, format: HTMLInputElement) {
    this.store.dispatch(new BookAdded(title.value, last.value, first.value, format.value));
    title.value = '';
    last.value = '';
    first.value = '';
    format.value = '';
    title.focus();
  }
}
