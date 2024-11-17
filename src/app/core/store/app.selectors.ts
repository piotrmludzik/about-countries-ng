import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

const selectAppState = createFeatureSelector<AppState>('app');

export const appSelectors = {
  selectStats: createSelector(selectAppState, (state: AppState) => state.stats),
  selectContinentsFilter: createSelector(selectAppState, (state: AppState) => state.continentsFilter),
  selectSearchPhrase: createSelector(selectAppState, (state: AppState) => state.searchPhrase)
};
