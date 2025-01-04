import { inject, Pipe, PipeTransform } from '@angular/core';
import { tokens } from '../../core/constants/tokens.const';
import { Dictionary, LanguageListMode } from '../models';

@Pipe({
  name: 'languageList',
  standalone: true
})
export class LanguageListPipe implements PipeTransform {

  private readonly listSeparator = inject(tokens.appConfig).listSeparator;

  transform(language: Dictionary | null | undefined, mode: LanguageListMode = LanguageListMode.all): string {
    if (!language) return '';

    const languageList = this.getLanguageList(language, mode);
    return languageList.join(`${this.listSeparator} `);
  }

  private getLanguageList(language: Dictionary, mode: LanguageListMode): string[] {
    const languageList = Object.keys(language).map(key => language[key]);

    switch (mode) {
      case LanguageListMode.all:
        return languageList;
      case LanguageListMode.firstTree:
        return languageList.splice(0, 3);
      case LanguageListMode.rest:
        return languageList.slice(3);
      default:
        throw new Error(`Unsupported LanguageListMode: ${mode}`);
    }
  }

}
