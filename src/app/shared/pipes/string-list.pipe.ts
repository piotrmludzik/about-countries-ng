import { inject, Pipe, PipeTransform } from '@angular/core';
import { tokens } from '../../core/constants/tokens.const';

@Pipe({
  name: 'stringList',
  standalone: true
})
export class StringListPipe implements PipeTransform {

  private readonly listSeparator = inject(tokens.appConfig).listSeparator;

  transform(list: string[], separator: string = this.listSeparator): string {
    if (!list || list.length === 0) return '';
    if (list.length === 1) return list[0];

    return list.slice(0, -1).join(`${separator} `);
  }

}
