import { Component, inject, Input } from '@angular/core';
import { tokens } from '../../../../../core/constants/tokens.const';

@Component({
  selector: 'acn-country-details-flag',
  templateUrl: './country-details-flag.component.html',
  styles: ':host {display: contents}'
})
export class CountryDetailsFlagComponent {

  protected readonly tooltipDelay = inject(tokens.appConfig).tooltipDelay;

  protected flagLoading = true;

  @Input() loading!: boolean;
  @Input() flagUrl?: string;
  @Input() countryName?: string;

}
