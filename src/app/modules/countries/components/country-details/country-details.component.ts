import { Component, Input } from '@angular/core';
import { CountryDetails } from '../../models/country.model';

@Component({
  selector: 'acn-country-details',
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss'
})
export class CountryDetailsComponent {

  @Input() loading = true;
  @Input() country?: CountryDetails;

}
