import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { concatLatestFrom, tapResponse } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { SortEvent } from 'primeng/api';
import { exhaustMap, filter, of, switchMap, tap } from 'rxjs';
import { appActions } from '../../../../core/store/app.actions';
import { appSelectors } from '../../../../core/store/app.selectors';
import { Column, CountriesStats, SortOrder } from '../../../../shared/models';
import { countriesColumns } from '../../constants/countries-columns.const';
import { countriesFields } from '../../constants/countries-fields.const';
import { CountryRecord, CountryRecordFilters } from '../../models/country-record.model';
import { CountriesService } from '../../services/countries.service';

export interface CountriesPageState {
  columns: Column[];
  countries: CountryRecord[];
  countriesLoading: boolean;
  filteredCountries: CountryRecord[];
  filteredCountriesLoading: boolean;
  sortField: string;
  filters: CountryRecordFilters;
}

const initialState: CountriesPageState = {
  columns: countriesColumns,
  countries: [],
  countriesLoading: false,
  filteredCountries: [],
  filteredCountriesLoading: false,
  sortField: countriesFields.name,
  filters: {} as CountryRecordFilters
};

@Injectable()
export class CountriesPageStore extends ComponentStore<CountriesPageState> {

  constructor(private appStore: Store,
              private countriesService: CountriesService) {
    super(initialState);
    this.loadCountries();
    this.handleFilters(this.selectCountriesAndFilters$);
    this.handleContinentsFilter(this.appStore.select(appSelectors.selectContinentsFilter));
    this.handleSearchPhrase(this.appStore.select(appSelectors.selectSearchPhrase));
    this.handleStats(this.selectFilteredCountries$);
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
      tap(() => this.patchState({countriesLoading: true})),
      exhaustMap(() => this.countriesService.getCountries$({fields: Object.keys(countriesFields)}).pipe(
        tapResponse({
          next: (countries) => this.patchState({countries}),
          error: () => {
            throw new Error('Implement Errors!');
          },
          finalize: () => this.patchState({countriesLoading: false})
        })
      ))
    )
  );

  private readonly handleFilters = this.effect<{ countries: CountryRecord[], filters: CountryRecordFilters }>(
    (data$) => data$.pipe(
      filter((data) => !!data.countries && !!data.countries.length),
      tap(() => this.patchState({filteredCountriesLoading: true})),
      switchMap((data) => {
        let filteredCountries: CountryRecord[] = [...data.countries];

        if (data.filters.searchPhrase) {
          const searchPhraseLower = data.filters.searchPhrase.toLowerCase();
          filteredCountries = filteredCountries.filter(country => country.name.common.toLowerCase().includes(searchPhraseLower) ||
            country.capital.some(capital => capital.toLowerCase().includes(searchPhraseLower)) ||
            Object.values(country.languages).some(languageName => languageName.toLowerCase().includes(searchPhraseLower)));
        }

        if (data.filters.continents && !!data.filters.continents.length) {
          filteredCountries = filteredCountries.filter(country =>
            country.continents.some(continent =>
              data.filters.continents?.some(filterContinent => continent.toLowerCase() === filterContinent.toLowerCase())
            )
          );
        }

        return of(filteredCountries);
      }),
      tap((filteredCountries) => this.patchState({filteredCountries})),
      tap(() => this.patchState({filteredCountriesLoading: false}))
    )
  );

  private readonly handleSearchPhrase = this.effect<string>(
    (searchPhrase$) => searchPhrase$.pipe(
      tap(searchPhrase => this.updateFilter({key: 'searchPhrase', value: searchPhrase}))
    )
  );

  private readonly handleContinentsFilter = this.effect<string[] | null>(
    (continentsFilter$) => continentsFilter$.pipe(
      tap(continentsFilter => this.updateFilter({key: 'continents', value: continentsFilter}))
    )
  );

  private readonly handleStats = this.effect<CountryRecord[]>(
    (filteredCountries$) => filteredCountries$.pipe(
      tap(filteredCountries => {
        let stats: CountriesStats = {area: 0, countries: 0, population: 0};

        stats.countries = filteredCountries.length;
        filteredCountries.forEach(country => {
          stats.area += country.area;
          stats.population += country.population;
        });

        this.appStore.dispatch(appActions.setStats({stats}));
      })
    )
  );

  private selectFilteredCountries$ = this.select((state) => state.filteredCountries);
  private selectCountries$ = this.select((state) => state.countries);
  private selectFilters$ = this.select((state) => state.filters);
  private selectCountriesAndFilters$ = this.select(
    this.selectCountries$,
    this.selectFilters$,
    (countries, filters) => ({
      countries,
      filters
    })
  );

  private updateFilter = this.updater((state: CountriesPageState, {key, value}: { key: string, value: any }) => ({
    ...state,
    filters: {
      ...state.filters,
      [key]: value
    }
  }));

}
