import { inject, Pipe, PipeTransform } from '@angular/core';
import { tokens } from '../../core/constants/tokens.const';
import { Currency } from '../../modules/countries/models/country.model';
import { Dictionary } from '../models';

@Pipe({
  name: 'currenciesList',
  standalone: true
})
export class CurrenciesListPipe implements PipeTransform {

  private readonly separator = inject(tokens.appConfig).listSeparator;

  transform(currencies: Dictionary<Currency> | null | undefined): string {
    if (!currencies) return '';

    return Object.keys(currencies)
      .map(key => (`${currencies[key].name} (${currencies[key].symbol})`))
      .join(this.separator);
  }

}
