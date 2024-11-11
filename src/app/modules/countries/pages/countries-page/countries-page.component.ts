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

  onSortData(event: SortEvent): void {
    this.componentStore.sortCountries(event);
  }

}
