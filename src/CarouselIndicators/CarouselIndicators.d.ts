import { SvelteComponent } from 'svelte';

export interface CarouselIndicatorsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['ol']> {
  activeIndex: number;
  items: any[];
}

export default class CarouselIndicators extends SvelteComponent<
  CarouselIndicatorsProps,
  {},
  {}
> {}
