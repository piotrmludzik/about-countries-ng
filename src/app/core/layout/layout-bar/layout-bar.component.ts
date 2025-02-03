import { Component, Input } from '@angular/core';
import { CountriesStats } from '../../../shared/models';
import { LayoutStatsComponent } from './layout-stats/layout-stats.component';
import { LayoutTitleComponent } from './layout-title/layout-title.component';

@Component({
  selector: 'acn-layout-bar',
  imports: [
    // Project
    LayoutStatsComponent,
    LayoutTitleComponent
  ],
  templateUrl: './layout-bar.component.html',
  styles: ':host{display: contents}'
})
export class LayoutBarComponent {

  @Input() stats!: CountriesStats;

}
