import { createAction, props } from '@ngrx/store';

export const appActions = {
  setSearchPhrase: createAction(
    '[Search] Set Search Phrase',
    props<{ searchPhrase: string }>()
  )
};
