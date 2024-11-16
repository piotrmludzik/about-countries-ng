import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputSearchComponent } from '../../../shared/components';
import { layoutComponents } from './components';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ...layoutComponents
  ],
  imports: [
    // Angular
    CommonModule,
    RouterOutlet,

    // PrimeNG
    MultiSelectModule,

    // Project
    FloatLabelModule,
    InputSearchComponent
  ]
})
export class LayoutModule {
}
