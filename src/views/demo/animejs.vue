<template>
  <div center text-center col-span-6 flex flex-col items-center justify-center text-black h-screen>
    <div ref="top" font-500 text-xl> 咨询，测评，价格 </div>
    <div ref="middle" text-8xl font-500 text-blue-500 b-blue-500 mt-2> INFORMATION </div>
    <div ref="bottom" text-sm font-500 mt-2 text-gray-400> 提供最新汽车报价,汽车图片,汽车价格大全,汽车新闻、行情、评测、导购等内容 </div>
  </div>
</template>
<script setup lang="ts">
  import { useTranslateX, useTranslateY, useAnime } from '/@/hooks/useAnime';
  const top = ref<HTMLElement | null>(null);
  const middle = ref<HTMLElement | null>(null);
  const bottom = ref<HTMLElement | null>(null);
  // useTranslateX(middle, -600, 0, 0, 600);
  useTranslateY(top, -60, 0, 600, 200);
  useAnime({
    targets: middle,
    translateX: [-600, 0],
    duration: 600,
    easing: 'easeInOutQuad',
    opacity: [0, 1],
  });
  useTranslateY(bottom, 60, 0, 600, 200);
</script>
