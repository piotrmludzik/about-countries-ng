import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'acn-layout-menu',
  templateUrl: './layout-menu.component.html'
})
export class LayoutMenuComponent {

  @Input() menuItems!: MenuItem[];

}
