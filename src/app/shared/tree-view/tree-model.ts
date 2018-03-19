export interface TreeModel<T = any, V = any> {
  label: string;
  meta?: T;
  children?: TreeModel<V>[];
}
