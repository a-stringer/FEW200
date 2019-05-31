import { Action } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

interface ShoppingItemEntity {
  id: string;
  description: string;
}
export interface State extends EntityState<ShoppingItemEntity> {
}
export const adapter = createEntityAdapter<ShoppingItemEntity>();

const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      description: 'Taco Shells'
    },
    2: {
      id: '2',
      description: 'Slip-And-Slide'
    }
  }
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
