import { inject, Pipe, PipeTransform } from '@angular/core';
import { tokens } from '../../core/constants/tokens.const';

@Pipe({
  name: 'emptyValue',
  standalone: true
})
export class EmptyValuePipe implements PipeTransform {

  private readonly emptyValue = inject(tokens.appConfig).emptyValue;

  transform(value: string | null | undefined): string {
    return !!value ? value : this.emptyValue;
  }
}
