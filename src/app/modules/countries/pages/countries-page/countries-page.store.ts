import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { concatLatestFrom, tapResponse } from '@ngrx/operators';
import { exhaustMap, tap } from 'rxjs';
import { Column } from '../../../../shared/models';
import { countriesFields } from '../../components/constants/countries-fields.model';
import { CountryRecord, CountryRecordFilters } from '../../models/country-record.model';
import { CountriesService } from '../../services/countries.service';

export interface CountriesPageState {
  columns: Column[];
  countries: CountryRecord[];
  countriesLoading: boolean;
  filters: CountryRecordFilters;
}

const defaultColumns: Column[] = [
  {field: countriesFields.name, header: 'Name'},
  {field: countriesFields.continents, header: 'Continents'},
  {field: countriesFields.area, header: 'Area'},
  {field: countriesFields.population, header: 'Population'},
  {field: countriesFields.capital, header: 'Capital'},
  {field: countriesFields.languages, header: 'Languages'},
  {field: countriesFields.timezones, header: 'Timezones'}
];
const defaultFields = Object.keys(countriesFields);
const initialState: CountriesPageState = {
  columns: defaultColumns,
  countries: [],
  countriesLoading: false,
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

  private updateCountries = this.updater((state: CountriesPageState, countries: CountryRecord[]) => ({
    ...state,
    countries: countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
  }));
}
