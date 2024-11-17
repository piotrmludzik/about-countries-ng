import { createAction, props } from '@ngrx/store';
import { CountriesStats } from '../../shared/models';

export const appActions = {
  setStats: createAction(
    '[Application] Set stats area',
    props<{ stats: CountriesStats }>()
  ),
  setContinentsFilter: createAction(
    '[Application] Set filter continents',
    props<{ continentsFilter: string[] | null }>()
  ),
  setSearchPhrase: createAction(
    '[Application] Set Search Phrase',
    props<{ searchPhrase: string }>()
  )
};
