import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Button } from 'primeng/button';
import { Menu } from 'primeng/menu';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'acn-layout-menu',
  imports: [
    // PrimeNg
    Button,
    Menu,
    Toast
  ],
  templateUrl: './layout-menu.component.html'
})
export class LayoutMenuComponent {

  @Input() menuItems!: MenuItem[];

}
