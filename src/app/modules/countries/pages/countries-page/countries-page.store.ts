import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { concatLatestFrom, tapResponse } from '@ngrx/operators';
import { SortEvent } from 'primeng/api';
import { exhaustMap, tap } from 'rxjs';
import { Column, SortOrder } from '../../../../shared/models';
import { countriesFields } from '../../constants/countries-fields.model';
import { CountryRecord, CountryRecordFilters } from '../../models/country-record.model';
import { CountriesService } from '../../services/countries.service';

export interface CountriesPageState {
  columns: Column[];
  countries: CountryRecord[];
  countriesLoading: boolean;
  sortField: string;
  filters: CountryRecordFilters;
}

const defaultColumns: Column[] = [
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
const defaultFields = Object.keys(countriesFields);
const initialState: CountriesPageState = {
  columns: defaultColumns,
  countries: [],
  countriesLoading: false,
  sortField: countriesFields.name,
  filters: {
    fields: defaultFields
  }
};

@Injectable()
export class CountriesPageStore extends ComponentStore<CountriesPageState> {

  constructor(private countriesService: CountriesService) {
    super(initialState);
    this.loadCountries();
  }

  readonly sortCountries = this.effect<SortEvent>(
    (event$) => event$.pipe(
      concatLatestFrom(() => this.select((state) => state.columns)),
      tap(([event, columnsInfo]) => {
        const columnInfo = columnsInfo.find((column) => column.field === event.field);
        if (!event.data || !columnInfo) return;

        event.data.sort(columnInfo.sortFn);
        if (event.order === SortOrder.desc) event.data.reverse();
      })
    )
  );

  private readonly loadCountries = this.effect<void>(
    (trigger$) => trigger$.pipe(
      concatLatestFrom(() => this.selectFilters$),
      tap(() => this.patchState({countriesLoading: true})),
      exhaustMap(([, filters]) => this.countriesService.getCountries$(filters).pipe(
        tapResponse({
          next: (countries) => this.updateCountries(countries),
          error: () => {
            throw new Error('Implement Errors!');
          },
          finalize: () => this.patchState({countriesLoading: false})
        })
      ))
    )
  );

  private selectFilters$ = this.select((state) => state.filters);

  private updateCountries = this.updater((state: CountriesPageState, countries: CountryRecord[]) => ({...state, countries}));

}
