import { Component, Input } from '@angular/core';

@Component({
  selector: 'acn-country-details-header',
  standalone: false,
  templateUrl: './country-details-header.component.html',
  styles: ':host {display: contents}'
})
export class CountryDetailsHeaderComponent {

  @Input() loading!: boolean;
  @Input() commonName?: string;
  @Input() independent?: boolean;
  @Input() cca2?: string;
  @Input() cca3?: string;

}
