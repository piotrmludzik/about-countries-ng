import { Component, Input } from '@angular/core';
import { tableDetailsRowStyle } from './table-details-row-style.const';

@Component({
  selector: 'acn-table-details-row',
  standalone: true,
  templateUrl: './table-details-row.component.html',
  styles: ':host{display: contents}'
})
export class TableDetailsRowComponent {

  protected readonly tableDetailsRowStyle = tableDetailsRowStyle;

  @Input() title!: string;
  @Input() data!: string;
  @Input() titleClass!: string;
  @Input() dataClass!: string;

}
