import { DecimalPipe } from '@angular/common';
import { inject, Pipe, PipeTransform } from '@angular/core';
import { tokens } from '../../core/constants/tokens.const';

@Pipe({
  name: 'area',
  standalone: true
})
export class AreaPipe implements PipeTransform {

  private readonly decimalPipe = inject(DecimalPipe);

  private readonly digitsInfo = inject(tokens.appConfig).digitsInfo;

  transform(value: number): string {
    const formattedNumber = this.decimalPipe.transform(value, this.digitsInfo);
    return `${formattedNumber} m²`;
  }

}
