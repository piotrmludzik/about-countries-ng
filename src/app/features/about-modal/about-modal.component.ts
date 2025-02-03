import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { environment } from '../../../environments/environment';
import { tableDetailsRowStyle } from '../../shared/components';
import { BlockDescriptionComponent } from '../../shared/components/block-description/block-description.component';
import { ButtonsContainerComponent } from '../../shared/containers/buttons-container/buttons-container.component';
import { DataContainerComponent } from '../../shared/containers/data-container/data-container.component';

@Component({
  selector: 'acn-about-modal',
  imports: [
    // PrimeNg
    Button,

    // Project
    BlockDescriptionComponent,
    ButtonsContainerComponent,
    DataContainerComponent
  ],
  templateUrl: './about-modal.component.html'
})
export class AboutModalComponent {

  private dialogRef = inject(DynamicDialogRef);

  protected readonly environment = environment;
  protected readonly tableDetailsRowStyle = tableDetailsRowStyle;

  onClose(): void {
    this.dialogRef.close();
  }

}
