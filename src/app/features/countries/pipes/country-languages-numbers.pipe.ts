import { Pipe, PipeTransform } from '@angular/core';
import { Dictionary } from '../../../shared/models';

@Pipe({
  name: 'countryLanguagesNumbers',
  standalone: false
})
export class CountryLanguagesNumbersPipe implements PipeTransform {

  transform(language: Dictionary | null | undefined): number {
    if (!language) return 0;

    return Object.keys(language).length;
  }

}
