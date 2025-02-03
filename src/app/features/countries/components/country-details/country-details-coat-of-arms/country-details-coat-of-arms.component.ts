import { Component, inject, Input } from '@angular/core';
import { tokens } from '../../../../../core/constants/tokens.const';

@Component({
  selector: 'acn-country-details-coat-of-arms',
  standalone: false,
  templateUrl: './country-details-coat-of-arms.component.html',
  styles: ':host {display: contents}'
})
export class CountryDetailsCoatOfArmsComponent {

  protected readonly tooltipDelay = inject(tokens.appConfig).tooltipDelay;

  protected coatOfArmsLoading = true;

  @Input() loading!: boolean;
  @Input() coatOfArmsUrl?: string;
  @Input() countryName?: string;

}
