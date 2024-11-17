import { Component, inject } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { CountriesPageStore } from './countries-page.store';

@Component({
  selector: 'acn-countries-page',
  templateUrl: './countries-page.component.html',
  providers: [CountriesPageStore]
})
export class CountriesPageComponent {

  private readonly componentStore = inject(CountriesPageStore);

  protected readonly componentState = this.componentStore.state$;

  onGetCountryDetails(cca3: string): void {
    this.componentStore.getCountryDetails(cca3);
  }

  onSortData(event: SortEvent): void {
    this.componentStore.sortCountries(event);
  }

}
