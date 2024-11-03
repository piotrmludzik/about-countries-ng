import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tokens } from '../../../core/constants/tokens.const';
import { HttpUtils } from '../../../shared/utils';
import { CountryRecord, CountryRecordFilters } from '../models/country-record.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly httpClient = inject(HttpClient);

  private readonly apiUrl = inject(tokens.appConfig).apiUrl;
  private readonly url = {
    getAll: `${this.apiUrl}/all`
  };

  getCountries$(filters: CountryRecordFilters): Observable<CountryRecord[]> {
    const params = HttpUtils.buildHttpParams(filters);
    return this.httpClient.get<CountryRecord[]>(this.url.getAll, {params});
  }
}
