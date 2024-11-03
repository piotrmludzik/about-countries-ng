import { CountryNames } from './country.model';

export interface CountryRecord {
  area: number;
  capital: string;
  cca2: string;
  cca3: string;
  continents: string[];
  flag: string;
  languages: string[];
  maps: string[];
  name: CountryNames;
  population: number;
  timezones: string[];
}

export interface CountryRecordFilters {
  fields: string[];
}
