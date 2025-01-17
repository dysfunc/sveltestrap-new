import { SvelteComponent } from 'svelte';

export interface CardImgOverlayProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {}

export default class CardImgOverlay extends SvelteComponent<
  CardImgOverlayProps,
  {},
  { default: {} }
> {}
