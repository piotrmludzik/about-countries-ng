import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'acn-layout-toolbox',
  templateUrl: './layout-toolbox.component.html',
  styles: ':host{display: contents}'
})
export class LayoutToolboxComponent {

  @Output() search = new EventEmitter<string>();
}
