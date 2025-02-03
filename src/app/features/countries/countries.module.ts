import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { Button } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Ripple } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonTableComponent, TableDetailsRowComponent } from '../../shared/components';
import { AreaPipe, CoordinatesPipe, CurrenciesListPipe, EmptyValuePipe, LanguageListPipe, SeparatorPipe, StringListPipe } from '../../shared/pipes';
import { countryComponents } from './components';
import { countryRoutes } from './countries.routes';
import { countryPages } from './pages';
import { countryPipes } from './pipes';

@NgModule({
  declarations: [
    ...countryComponents,
    ...countryPages,
    ...countryPipes
  ],
  imports: [
    // Angular
    CommonModule,

    // PrimeNg,
    BadgeModule,
    Button,
    DividerModule,
    Ripple,
    SkeletonModule,
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
