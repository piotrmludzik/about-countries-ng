import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Button } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { environment } from '../environments/environment';

@Component({
  selector: 'acn-root',
  imports: [
    // Angular

    // PrimeNg
    ToastModule,
    Button

    // Project
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private titleService = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle(environment.app.name);
  }

}
