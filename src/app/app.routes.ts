import { Routes } from '@angular/router';
import { routeName } from './core/constants/route-names.const';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: routeName.countries,
        pathMatch: 'full'
      },
      {
        path: routeName.countries,
        loadChildren: () => import('./features/countries/countries.module').then(w => w.CountriesModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
