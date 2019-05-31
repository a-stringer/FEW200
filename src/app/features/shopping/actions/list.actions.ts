import { Action } from '@ngrx/store';
import { ShoppingItemEntity } from '../reducers/list.reducer';

const currentFakeId = 1;
export const ADD_ITEM = '[shopping] add item';
export class ItemAdded implements Action {
  readonly type = ADD_ITEM;
  payload: ShoppingItemEntity;
  constructor(public what: string) { }
}

export type All = ItemAdded;
