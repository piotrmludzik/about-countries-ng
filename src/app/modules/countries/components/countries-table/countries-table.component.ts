import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Column } from '../../../../shared/models';
import { countriesFields } from '../../constants/countries-fields.const';
import { CountryRecord } from '../../models/country-record.model';

@Component({
  selector: 'acn-countries-table',
  templateUrl: './countries-table.component.html'
})
export class CountriesTableComponent {

  protected readonly countriesFields = countriesFields;

  @Input() columns!: Column[];
  @Input() data!: CountryRecord[];
  @Input() dataLoading!: boolean;
  @Input() sortField!: string;

  @Output() sortData = new EventEmitter<SortEvent>();

}
