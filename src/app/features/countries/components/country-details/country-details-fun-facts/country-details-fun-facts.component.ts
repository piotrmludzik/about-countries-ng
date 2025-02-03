import { Component, Input } from '@angular/core';
import { CarInfo, PostalCode } from '../../../models/country.model';

@Component({
  selector: 'acn-country-details-fun-facts',
  standalone: false,
  templateUrl: './country-details-fun-facts.component.html'
})
export class CountryDetailsFunFactsComponent {

  @Input() loading!: boolean;
  @Input() startOfWeek?: string;
  @Input() postalCode?: PostalCode;
  @Input() carInfo?: CarInfo;

}
