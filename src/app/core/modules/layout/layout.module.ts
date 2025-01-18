import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { InputSearchComponent } from '../../../shared/components';
import { AreaPipe } from '../../../shared/pipes';
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
    Button,
    MenuModule,
    MultiSelectModule,
    ToastModule,

    // Project
    AreaPipe,
    FloatLabelModule,
    InputSearchComponent
  ]
})
export class LayoutModule {
}
