import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { appActions } from '../../store/app.actions';
import { appSelectors } from '../../store/app.selectors';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'acn-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  private readonly store: Store<AppState> = inject(Store);

  protected readonly stats$ = this.store.select(appSelectors.selectStats);

  onContinentsChange(continentsFilter: string[] | null): void {
    this.store.dispatch(appActions.setContinentsFilter({continentsFilter}));
  }

  onSearchChange(searchPhrase: string): void {
    this.store.dispatch(appActions.setSearchPhrase({searchPhrase}));
  }

}
