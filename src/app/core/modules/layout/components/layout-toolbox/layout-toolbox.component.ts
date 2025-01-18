import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { continentsOptions } from '../../../../../shared/constants';

@Component({
  selector: 'acn-layout-toolbox',
  templateUrl: './layout-toolbox.component.html',
  styles: ':host{display: contents}'
})
export class LayoutToolboxComponent {

  protected readonly continentsOptions = continentsOptions;

  @Input() menuItems!: MenuItem[];

  @Output() continentsChange = new EventEmitter<string[] | null>();
  @Output() searchChange = new EventEmitter<string>();

}
