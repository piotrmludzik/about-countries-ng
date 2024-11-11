export interface Column {
  field: string;
  header: string;
  sortFn?: (a: any, b: any) => number;
}
