import { ColumnProps } from '../Col';
import { SvelteComponent } from 'svelte';

export interface LabelProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['label']> {
  check?: boolean;
  for?: string;
  hidden?: boolean;
  lg?: ColumnProps;
  md?: ColumnProps;
  size?: string;
  sm?: ColumnProps;
  xl?: ColumnProps;
  xs?: ColumnProps;
  xxl?: ColumnProps;
}

export default class Label extends SvelteComponent<
  LabelProps,
  {},
  { default: {} }
> {}
