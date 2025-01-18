import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { environment } from '../environments/environment';
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
export class AppComponent implements OnInit {

  private titleService = inject(Title);

  ngOnInit() {
    this.titleService.setTitle(environment.app.name);
  }

}
