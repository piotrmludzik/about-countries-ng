import { inject, Pipe, PipeTransform } from '@angular/core';
import { tokens } from '../../core/constants/tokens.const';

@Pipe({
  name: 'separator',
  standalone: true
})
export class SeparatorPipe implements PipeTransform {

  private readonly separator = inject(tokens.appConfig).listSeparator;

  transform(last: boolean): string {
    return last ? '' : `${this.separator} `;
  }

}
