import { Action } from '@ngrx/store';
import { BookEntity } from '../reducers/shelf.reducer';

let currentFakeId = 1;

export const ADD_BOOK = '[library] add book';
export class BookAdded implements Action {
  readonly type = ADD_BOOK;
  payload: BookEntity;
  constructor(title: string, last: string, first: string, format: string) {
    this.payload = {
      id: 'TEMP' + (currentFakeId++).toString(),
      bookTitle: title,
      authorFirst: first,
      authorLast: last,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16)
    };
  }
}

export type All = BookAdded;
