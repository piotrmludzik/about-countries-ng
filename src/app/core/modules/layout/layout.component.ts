import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AboutModalComponent } from '../../../modules/about-modal/about-modal.component';
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
  private readonly dialogService = inject(DialogService);

  private readonly showAboutModal = () => {
    this.dialogService.open(AboutModalComponent, {
      header: `About`,
      width: 'max(40rem, 33dvw)',
      styleClass: 'm-5'
    } as DynamicDialogConfig);
  };

  protected readonly stats$ = this.store.select(appSelectors.selectStats);
  protected readonly layoutMenuConfig: MenuItem[] = [
    {icon: 'pi pi-info-circle', label: 'About', command: this.showAboutModal}
  ];

  onContinentsChange(continentsFilter: string[] | null): void {
    this.store.dispatch(appActions.setContinentsFilter({continentsFilter}));
  }

  onSearchChange(searchPhrase: string): void {
    this.store.dispatch(appActions.setSearchPhrase({searchPhrase}));
  }
}
