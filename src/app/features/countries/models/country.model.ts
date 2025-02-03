import { Dictionary } from '../../../shared/models';

export interface Country {
  area: number;
  borders?: string[];
  capital?: string[];
  capitalInfo: CapitalInfo;
  car?: CarInfo;
  cca2: string;
  cca3: string;
  coatOfArms: CoatOfArms;
  continents: string[];
  currencies?: Dictionary<Currency>;
  flag: string;
  flags: Flag;
  independent: boolean;
  landlocked: boolean;
  languages?: Dictionary;
  latlng: [number, number];
  maps: Maps;
  name: CountryName;
  population: number;
  postalCode?: PostalCode;
  region: string;
  startOfWeek: string;
  status: string;
  subregion?: string;
  timezones: string[];
  tld: string[];
  translations: Record<string, Translation>;
  unMember: boolean;
}

export interface CountryDetails extends Omit<Country, 'borders'> {
  borders?: Borders[];
}

export interface CapitalInfo {
  latlng: [number, number];
}

export interface CarInfo {
  signs: string[];
  side: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Flag {
  png: string;
  svg: string;
  alt: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface CountryName {
  common: string;
  official: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface Translation {
  official: string;
  common: string;
}

export interface Borders {
  cca3: string;
  name: CountryName;
  flag: string;
}
