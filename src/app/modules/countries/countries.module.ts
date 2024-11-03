import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TableModule } from 'primeng/table';
import { AreaPipe, LanguageListPipe, StringListPipe } from '../../shared/pipes';
import { countryComponents } from './components';
import { countryRoutes } from './countries.routes';
import { countryPages } from './pages';

@NgModule({
  declarations: [
    ...countryComponents,
    ...countryPages
  ],
  imports: [
    // Angular
    CommonModule,

    // PrimeNg
    TableModule,

    // Project
    AreaPipe,
    LanguageListPipe,
    StringListPipe
  ],
  providers: [
    provideRouter(countryRoutes)
  ]
})
export class CountriesModule {
}
