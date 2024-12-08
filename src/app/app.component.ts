import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { LayoutModule } from './core/modules/layout/layout.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // Angular
    RouterOutlet,

    // PrimeNg
    ToastModule,

    // Project
    LayoutModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
