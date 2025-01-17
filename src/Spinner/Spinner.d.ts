import { SvelteComponent } from 'svelte';
import { TextColor } from '../shared';

export interface SpinnerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  color?: TextColor;
  size?: any;
  type?: string;
}

export default class Spinner extends SvelteComponent<
  SpinnerProps,
  {},
  { default: {} }
> {}
