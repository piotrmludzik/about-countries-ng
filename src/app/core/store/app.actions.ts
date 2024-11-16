import { createAction, props } from '@ngrx/store';

export const appActions = {
  setContinentsFilter: createAction(
    '[Filter] Filter continents',
    props<{ continentsFilter: string[] | null }>()
  ),
  setSearchPhrase: createAction(
    '[Search] Set Search Phrase',
    props<{ searchPhrase: string }>()
  )
};
