import { AppConfig } from '../models/app-config.model';

export const defaultAppConfig: AppConfig = {
  apiUrl: 'https://restcountries.com/v3.1',
  digitsInfo: '1.2',
  emptyValue: '-',
  listSeparator: ',',
  notificationDisplayTime: 3000,
  searchByNumberOfCharacters: 3,
  searchDebounceTime: 300,
  tooltipDelay: 300
};
