import { DecimalPipe } from '@angular/common';
import { inject, Pipe, PipeTransform } from '@angular/core';
import { tokens } from '../../core/constants/tokens.const';
import { unicode } from '../constants/unicode.const';

@Pipe({
  name: 'area',
  standalone: true
})
export class AreaPipe implements PipeTransform {

  private readonly decimalPipe = inject(DecimalPipe);

  private readonly digitsInfo = inject(tokens.appConfig).digitsInfo;

  transform(value: number | null | undefined): string {
    if (!value) return '';

    const formattedNumber = this.decimalPipe.transform(value, this.digitsInfo);
    return `${formattedNumber}${unicode.nonBreakingSpace}m²`;
  }

}
