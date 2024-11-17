import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Button } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Ripple } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonTableComponent, TableDetailsRowComponent } from '../../shared/components';
import { AreaPipe, CoordinatesPipe, CurrenciesListPipe, EmptyValuePipe, LanguageListPipe, SeparatorPipe, StringListPipe } from '../../shared/pipes';
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
    Button,
    DividerModule,
    Ripple,
    TableModule,
    TagModule,
    TooltipModule,

    // Project
    AreaPipe,
    CoordinatesPipe,
    CurrenciesListPipe,
    EmptyValuePipe,
    LanguageListPipe,
    SeparatorPipe,
    SkeletonTableComponent,
    StringListPipe,
    TableDetailsRowComponent
  ],
  providers: [
    provideRouter(countryRoutes)
  ]
})
export class CountriesModule {
}
