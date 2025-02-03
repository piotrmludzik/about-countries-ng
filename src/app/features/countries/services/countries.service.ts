import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tokens } from '../../../core/constants/tokens.const';
import { Dictionary } from '../../../shared/models';
import { HttpUtils } from '../../../shared/utils';
import { CountryRecord } from '../models/country-record.model';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly httpClient = inject(HttpClient);

  private readonly apiUrl = inject(tokens.appConfig).apiUrl;
  private readonly url = {
    getAll: () => `${this.apiUrl}/all`,
    getCountryByCca3: (cca3: string) => `${this.apiUrl}/alpha/${cca3}`
  };

  getCountries$(filters: Dictionary<string[]>): Observable<CountryRecord[]> {
    const params = HttpUtils.buildHttpParams(filters);
    return this.httpClient.get<CountryRecord[]>(this.url.getAll(), {params});
  }

  getCountryDetails$(cca3: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.url.getCountryByCca3(cca3));
  }
}
