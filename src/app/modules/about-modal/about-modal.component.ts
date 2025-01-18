import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { tableDetailsRowStyle } from '../../shared/components';
import { BlockDescriptionComponent } from '../../shared/components/block-description/block-description.component';
import { ButtonsContainerComponent } from '../../shared/containers/buttons-container/buttons-container.component';
import { DataContainerComponent } from '../../shared/containers/data-container/data-container.component';

@Component({
  selector: 'acn-about-modal',
  standalone: true,
  imports: [
    // PrimeNG
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

  protected readonly tableDetailsRowStyle = tableDetailsRowStyle;

  onClose(): void {
    this.dialogRef.close();
  }

}
