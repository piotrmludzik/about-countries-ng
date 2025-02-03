import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { Column } from '../../models';

@Component({
  selector: 'acn-skeleton-table',
  imports: [
    // Angular
    CommonModule,

    // PrimeNg
    SkeletonModule,
    TableModule
  ],
  templateUrl: './skeleton-table.component.html'
})
export class SkeletonTableComponent {

  protected readonly virtualData = Array.from({length: 10}).map((_, index) => `Virtual item #${index}`);

  @Input() columns!: Column[];

}
