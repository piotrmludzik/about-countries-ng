import { InjectionToken } from '@angular/core';
import { AppConfig } from '../models/app-config.model';

export const tokens = {
  appConfig: new InjectionToken<AppConfig>('appConfigToken')
};
