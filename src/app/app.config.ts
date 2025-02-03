import { DecimalPipe } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import Aura from '@primeng/themes/aura';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { DialogService } from 'primeng/dynamicdialog';
import { routes } from './app.routes';
import { defaultAppConfig } from './core/constants/default-app-config.const';
import { tokens } from './core/constants/tokens.const';
import { appReducers } from './core/store/app.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    // Angular
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(routes),
    provideStore({app: appReducers}),
    provideZoneChangeDetection({eventCoalescing: true}),

    DecimalPipe,

    // PrimeNg
    providePrimeNG({
      theme: {
        preset: Aura
      },
      ripple: true
    }),

    DialogService,
    MessageService,

    // Project
    {provide: tokens.appConfig, useValue: defaultAppConfig}
  ]
};
