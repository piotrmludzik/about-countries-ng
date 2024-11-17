import { CountriesStats } from '../../shared/models';

export interface AppState {
  stats: CountriesStats,
  continentsFilter: string[] | null,
  searchPhrase: string;
}

export const initialAppState: AppState = {
  stats: {
    area: 0,
    countries: 0,
    population: 0
  },
  continentsFilter: null,
  searchPhrase: ''
};
