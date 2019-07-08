export const FEATURE_NAME = 'libraryFeature';
import * as fromShelf from './shelf.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../models';
export interface State {
  shelf: fromShelf.State;
}
export const reducers = {
  shelf: fromShelf.reducer
};

// selectors

// Feature Selector
export const selectFeature = createFeatureSelector<State>(FEATURE_NAME);

// A selector for each branch of the features state.
export const selectShelfBranch = createSelector(selectFeature, f => f.shelf);

export const { selectAll: selectAllBooks } = fromShelf.adapter.getSelectors(selectShelfBranch);

// The selectors for the actual components
export const selectBooks =
  createSelector(selectAllBooks, books => books as Book[]);
