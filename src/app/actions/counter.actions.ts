import { Action } from '@ngrx/store';

export const INCREMENT = '[counter] increment';
export class CountIncremented implements Action {
  readonly type = INCREMENT;
  constructor() { }
}
export const DECREMENT = '[counter] decrement';
export class CountDecremented implements Action {
  readonly type = DECREMENT;
  constructor() { }
}
export const RESET = '[counter] reset';
export class CountReset implements Action {
  readonly type = RESET;
  constructor() { }
}
export const SET_COUNT_BY = '[counter] set count by';
export class CountBySet implements Action {
  readonly type = SET_COUNT_BY;
  constructor(public by: number) { }
}

// Discriminated Union Type (typescriptlang.org)
export type All =
  CountDecremented | CountIncremented | CountReset | CountBySet;
