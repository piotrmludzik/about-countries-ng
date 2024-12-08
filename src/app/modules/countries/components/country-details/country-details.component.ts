import { Component, inject, Input } from '@angular/core';
import { tokens } from '../../../../core/constants/tokens.const';
import { CountryDetails } from '../../models/country.model';

@Component({
  selector: 'acn-country-details',
  templateUrl: './country-details.component.html'
})
export class CountryDetailsComponent {

  protected readonly tooltipDelay = inject(tokens.appConfig).tooltipDelay;

  protected countryFlagLoading = true;
  protected countryCoatOfArmsLoading = true;

  @Input() country!: CountryDetails;
  @Input() countryLoading!: boolean;

}
