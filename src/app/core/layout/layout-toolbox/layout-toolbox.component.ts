import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FloatLabel } from 'primeng/floatlabel';
import { MultiSelect } from 'primeng/multiselect';
import { InputSearchComponent } from '../../../shared/components';
import { continentsOptions } from '../../../shared/constants';
import { LayoutMenuComponent } from './layout-menu/layout-menu.component';

@Component({
  selector: 'acn-layout-toolbox',
  templateUrl: './layout-toolbox.component.html',
  imports: [
    // PrimeNg
    FloatLabel,
    MultiSelect,

    // Project
    InputSearchComponent,
    LayoutMenuComponent
  ],
  styles: ':host{display: contents}'
})
export class LayoutToolboxComponent {

  protected readonly continentsOptions = continentsOptions;

  @Input() menuItems!: MenuItem[];

  @Output() continentsChange = new EventEmitter<string[] | null>();
  @Output() searchChange = new EventEmitter<string>();

}
