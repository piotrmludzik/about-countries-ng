import { CountryName } from './country.model';

export interface CountryRecord {
  area: number;
  capital: string[];
  cca2: string;
  cca3: string;
  ccn3: number;
  continents: string[];
  flag: string;
  languages: string[];
  maps: string[];
  name: CountryName;
  population: number;
  timezones: string[];
}

export interface CountryRecordFilters {
  continents: string[] | null;
  searchPhrase: string;
}
