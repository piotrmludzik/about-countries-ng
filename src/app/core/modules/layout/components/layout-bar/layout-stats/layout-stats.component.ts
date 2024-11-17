import { Component, Input } from '@angular/core';
import { CountriesStats } from '../../../../../../shared/models';

@Component({
  selector: 'acn-layout-stats',
  templateUrl: './layout-stats.component.html'
})
export class LayoutStatsComponent {

  @Input() stats!: CountriesStats;

}
