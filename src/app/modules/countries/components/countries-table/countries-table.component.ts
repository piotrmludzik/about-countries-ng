import { Component, Input } from '@angular/core';
import { Column } from '../../../../shared/models';
import { CountryRecord } from '../../models/country-record.model';
import { countriesFields } from '../constants/countries-fields.model';

@Component({
  selector: 'acn-countries-table',
  templateUrl: './countries-table.component.html'
})
export class CountriesTableComponent {

  protected readonly countriesFields = countriesFields;

  @Input() columns!: Column[];
  @Input() data!: CountryRecord[];
}
