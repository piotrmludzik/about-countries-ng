import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

const selectAppState = createFeatureSelector<AppState>('app');

export const appSelectors = {
  selectSearchPhrase: createSelector(selectAppState, (state: AppState) => state.searchPhrase)
};
