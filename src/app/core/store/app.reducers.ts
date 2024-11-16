import { createReducer, on } from '@ngrx/store';
import { appActions } from './app.actions';
import { initialAppState } from './app.state';

export const appReducers = createReducer(
  initialAppState,
  on(appActions.setSearchPhrase, (state, {searchPhrase}) => ({
    ...state,
    searchPhrase
  }))
);
