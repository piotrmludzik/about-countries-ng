import { Routes } from '@angular/router';
import { LayoutComponent } from './core/modules/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: []
  }
];
