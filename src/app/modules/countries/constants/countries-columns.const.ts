import { Column } from '../../../shared/models';
import { CountryRecord } from '../models/country-record.model';
import { countriesFields } from './countries-fields.const';

export const countriesColumns: Column[] = [
  {
    field: countriesFields.numbering,
    header: ''
  },
  {
    field: countriesFields.name,
    header: 'Name',
    sortFn: (a: CountryRecord, b: CountryRecord) => a.name.common.localeCompare(b.name.common)
  },
  {
    field: countriesFields.continents,
    header: 'Continents',
    sortFn: (a: CountryRecord, b: CountryRecord) => {
      if (a.continents.length > 1 && b.continents.length === 1) return 1;
      if (a.continents.length === 1 && b.continents.length > 1) return -1;

      return a.continents[0].localeCompare(b.continents[0]);
    }
  },
  {
    field: countriesFields.area,
    header: 'Area',
    sortFn: (a: CountryRecord, b: CountryRecord) => a.area - b.area
  },
  {
    field: countriesFields.population,
    header: 'Population',
    sortFn: (a: CountryRecord, b: CountryRecord) => a.population - b.population
  },
  {
    field: countriesFields.capital,
    header: 'Capital'
  },
  {
    field: countriesFields.languages,
    header: 'Languages'
  },
  {
    field: countriesFields.timezones,
    header: 'Timezones'
  }
];
