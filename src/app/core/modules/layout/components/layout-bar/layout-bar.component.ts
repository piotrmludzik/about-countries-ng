import { Component, Input } from '@angular/core';
import { CountriesStats } from '../../../../../shared/models';

@Component({
  selector: 'acn-layout-bar',
  templateUrl: './layout-bar.component.html',
  styles: ':host{display: contents}'
})
export class LayoutBarComponent {

  @Input() stats!: CountriesStats;

}
