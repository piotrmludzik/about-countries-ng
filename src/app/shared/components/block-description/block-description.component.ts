import { Component, Input } from '@angular/core';

@Component({
  selector: 'acn-block-description',
  templateUrl: './block-description.component.html'
})
export class BlockDescriptionComponent {

  @Input() title!: string;

}
