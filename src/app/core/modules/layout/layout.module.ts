import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

    // Project
    InputSearchComponent
  ]
})
export class LayoutModule {
}
