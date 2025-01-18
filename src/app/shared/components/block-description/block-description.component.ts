import { Component, Input } from '@angular/core';

@Component({
  selector: 'acn-block-description',
  standalone: true,
  templateUrl: './block-description.component.html'
})
export class BlockDescriptionComponent {

  @Input() title!: string;

}
