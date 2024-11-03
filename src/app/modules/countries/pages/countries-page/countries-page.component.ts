import { Component, inject } from '@angular/core';
import { CountriesPageStore } from './countries-page.store';

@Component({
  selector: 'acn-countries-page',
  templateUrl: './countries-page.component.html',
  providers: [CountriesPageStore]
})
export class CountriesPageComponent {

  private readonly componentStore = inject(CountriesPageStore);

  protected readonly componentState = this.componentStore.state$;

}
