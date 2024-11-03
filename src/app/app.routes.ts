import { Routes } from '@angular/router';
import { routeName } from './core/constants/route-names.const';
import { LayoutComponent } from './core/modules/layout/layout.component';

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
        loadChildren: () => import('./modules/countries/countries.module').then(w => w.CountriesModule)
      }
    ]
  }
];
