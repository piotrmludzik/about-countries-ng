import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Column } from '../../../../shared/models';
import { countriesFields } from '../../constants/countries-fields.model';
import { CountryRecord, CountryRecordFilters } from '../../models/country-record.model';

@Component({
  selector: 'acn-countries-table',
  templateUrl: './countries-table.component.html'
})
export class CountriesTableComponent {

  @ViewChild('countriesTable') private readonly countriesTable!: Table;

  protected readonly countriesFields = countriesFields;

  @Input() columns!: Column[];
  @Input() data!: CountryRecord[];
  @Input() sortField!: string;

  @Output() sortData = new EventEmitter<SortEvent>();

  @Input()
  set filters(filters: CountryRecordFilters) {
    this.countriesTable?.clear();

    !!filters.searchPhrase && this.countriesTable.filterGlobal(filters.searchPhrase, 'contains');
  }

}
