import { inject, Pipe, PipeTransform } from '@angular/core';
import { tokens } from '../../core/constants/tokens.const';
import { Dictionary } from '../models';

@Pipe({
  name: 'languageList',
  standalone: true
})
export class LanguageListPipe implements PipeTransform {

  private readonly listSeparator = inject(tokens.appConfig).listSeparator;

  transform(language: Dictionary): string {
    const languageList = Object.keys(language).map(key => language[key]);
    return languageList.join(`${this.listSeparator} `);
  }

}
