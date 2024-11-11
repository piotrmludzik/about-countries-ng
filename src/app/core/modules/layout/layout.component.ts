import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { appActions } from '../../store/app.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'acn-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  private readonly store: Store<AppState> = inject(Store);

  onSearch(searchPhrase: string): void {
    this.store.dispatch(appActions.setSearchPhrase({searchPhrase}));
  }
}
