import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './core/modules/layout/layout.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // Angular
    RouterOutlet,

    // Project
    LayoutModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
