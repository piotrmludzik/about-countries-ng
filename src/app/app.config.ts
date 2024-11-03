import { DecimalPipe } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { defaultAppConfig } from './core/constants/default-app-config.const';
import { tokens } from './core/constants/tokens.const';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    DecimalPipe,
    {provide: tokens.appConfig, useValue: defaultAppConfig}
  ]
};
