import { SvelteComponent } from 'svelte';
import { Color } from './shared';

export interface CardProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  id?: string;
  inverse?: boolean;
  color?: Color;
  body?: boolean;
  outline?: boolean;
}

export default class Card extends SvelteComponent<
  CardProps,
  { click: WindowEventMap['click'] },
  { default: {} }
> {}
