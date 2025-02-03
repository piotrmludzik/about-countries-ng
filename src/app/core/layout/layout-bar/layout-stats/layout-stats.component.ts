import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CountriesStats } from '../../../../shared/models';
import { AreaPipe } from '../../../../shared/pipes';

@Component({
  selector: 'acn-layout-stats',
  imports: [
    // Angular
    DecimalPipe,

    // Project
    AreaPipe
  ],
  templateUrl: './layout-stats.component.html'
})
export class LayoutStatsComponent {

  @Input() stats!: CountriesStats;

}
