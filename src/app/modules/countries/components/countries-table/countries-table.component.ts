import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { TableRowCollapseEvent } from 'primeng/table';
import { tokens } from '../../../../core/constants/tokens.const';
import { Column, Dictionary, LanguageListMode } from '../../../../shared/models';
import { countriesFields } from '../../constants/countries-fields.const';
import { CountryRecord } from '../../models/country-record.model';
import { CountryDetails } from '../../models/country.model';

@Component({
  selector: 'acn-countries-table',
  templateUrl: './countries-table.component.html'
})
export class CountriesTableComponent {

  protected readonly tooltipDelay = inject(tokens.appConfig).tooltipDelay;

  protected readonly countriesFields = countriesFields;
  protected readonly languageListMode = LanguageListMode;

  protected expandedRows = {};

  @Input() columns!: Column[];
  @Input() data!: CountryRecord[];
  @Input() dataLoading!: boolean;
  @Input() countriesDetails!: Dictionary<CountryDetails>;
  @Input() countriesDetailsLoading!: Dictionary<boolean>;
  @Input() sortField!: string;

  @Output() rowExpand = new EventEmitter<string>();
  @Output() rowCollapse = new EventEmitter<TableRowCollapseEvent>();
  @Output() sortData = new EventEmitter<SortEvent>();

}
