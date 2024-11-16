import { DecimalPipe } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { defaultAppConfig } from './core/constants/default-app-config.const';
import { tokens } from './core/constants/tokens.const';
import { appReducers } from './core/store/app.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(routes),
    provideStore({app: appReducers}),
    provideZoneChangeDetection({eventCoalescing: true}),
    DecimalPipe,
    {provide: tokens.appConfig, useValue: defaultAppConfig}
  ]
};
