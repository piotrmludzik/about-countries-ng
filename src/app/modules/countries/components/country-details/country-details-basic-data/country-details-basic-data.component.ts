import { Component, Input } from '@angular/core';
import { Dictionary } from '../../../../../shared/models';
import { Currency } from '../../../models/country.model';

@Component({
  selector: 'acn-country-details-basic-data',
  templateUrl: './country-details-basic-data.component.html'
})
export class CountryDetailsBasicDataComponent {

  @Input() officialName!: string;
  @Input() capital!: string;
  @Input() population!: number;
  @Input() area!: number;
  @Input() languages!: Dictionary;
  @Input() currencies!: Dictionary<Currency>;

}
