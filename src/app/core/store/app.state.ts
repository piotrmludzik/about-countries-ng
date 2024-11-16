export interface AppState {
  continentsFilter: string[] | null,
  searchPhrase: string;
}

export const initialAppState: AppState = {
  continentsFilter: null,
  searchPhrase: ''
};
