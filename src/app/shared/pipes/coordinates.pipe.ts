import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coordinates',
  standalone: true
})
export class CoordinatesPipe implements PipeTransform {

  transform(coordinates: [number, number] | null | undefined): string {
    if (!coordinates || !coordinates.length) return '';

    return `lat. ${coordinates[0]}, lng. ${coordinates[1]}`;
  }

}
