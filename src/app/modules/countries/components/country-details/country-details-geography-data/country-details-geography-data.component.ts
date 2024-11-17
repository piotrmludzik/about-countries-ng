import { Component, Input } from '@angular/core';
import { tableDetailsRowStyle } from '../../../../../shared/components';
import { Borders } from '../../../models/country.model';

@Component({
  selector: 'acn-country-details-geography-data',
  templateUrl: './country-details-geography-data.component.html',
  styles: ':host{display: contents}'
})
export class CountryDetailsGeographyDataComponent {

  protected readonly tableDetailsRowStyle = tableDetailsRowStyle;

  @Input() continents!: string[];
  @Input() region!: string;
  @Input() subregion!: string;
  @Input() coordinates!: [number, number];
  @Input() googleMapsLink!: string;
  @Input() borders?: Borders[];
  @Input() landlocked!: boolean;
  @Input() timezones!: string[];

}
