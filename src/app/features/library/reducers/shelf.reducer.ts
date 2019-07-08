import * as shelfActions from '../actions/shelf.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
export interface BookEntity {
  id: string;
  bookTitle: string;
  authorFirst: string;
  authorLast: string;
  color: string;
}

export interface State extends EntityState<BookEntity> {

}
export const adapter = createEntityAdapter<BookEntity>();

const initialState: State = {
  ids: ['1', '2', '3'],
  entities: {
    1: {
      id: '1',
      bookTitle: 'Fall, or Dodge in Hell',
      authorFirst: 'Neal',
      authorLast: 'Stephenson',
      color: '#9b9b9b',
    },
    2: {
      id: '2',
      bookTitle: 'Hitchhiker\'s Guide to the Galaxy',
      authorFirst: 'Douglas',
      authorLast: 'Adams',
      color: '#ff9b9b',
    },
    3: {
      id: '3',
      bookTitle: 'A Farewell to Arms',
      authorFirst: 'Napolean',
      authorLast: 'Blownapart',
      color: '#9b9bff',
    }
  }
};

export function reducer(state: State = initialState, action: shelfActions.All): State {
  switch (action.type) {
    case shelfActions.ADD_BOOK: {
      return adapter.addOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
