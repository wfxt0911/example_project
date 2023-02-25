import anime from 'animejs/lib/anime.es.js';
import { Ref } from 'vue';
const EASING = 'easeInOutQuad';
export type CssField =
  | 'translateX'
  | 'translateY'
  | 'translateZ'
  | 'rotate'
  | 'rotateX'
  | 'rotateY'
  | 'rotateZ'
  | 'scale'
  | 'scaleX'
  | 'scaleY'
  | 'scaleZ'
  | 'skew'
  | 'skewX'
  | 'skewY'
  | 'perspective'
  | 'matrix'
  | 'matrix3d'
  | 'opacity';

export type AnimeParams = {
  targets: Ref<HTMLElement | null>;
  duration?: number;
  delay?: number;
  endDelay?: number;
  elasticity?: number;
  round?: number;
  loop?: number;
  autoplay?: boolean;
  direction?: string;
  easing?: anime.EasingOptions;
} & {
  [key in CssField]?: any;
};

export function useTranslateX(el: Ref<HTMLElement | null>, from = 0, to = 0, delay = 0, duration = 200, opotion?: AnimeParams) {
  onMounted(() => {
    anime({
      targets: el.value,
      translateX: [from, to],
      scale: [1.2, 1],
      opacity: [0, 1],
      duration,
      delay,
      easing: EASING,
      ...opotion,
    });
  });
}
export function useTranslateY(el: Ref<HTMLElement | null>, from = 0, to = 0, delay = 0, duration = 200, opotion?: AnimeParams) {
  onMounted(() => {
    anime({
      targets: el.value,
      translateY: [from, to],
      scale: [1.2, 1],
      opacity: [0, 1],
      duration,
      delay,
      easing: EASING,
      ...opotion,
    });
  });
}

export function useAnime(opotion: AnimeParams) {
  onMounted(() => {
    anime({
      ...opotion,
      targets: opotion.targets.value,
    });
  });
}
