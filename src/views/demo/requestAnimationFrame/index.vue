<template>
  <div class="w-screen h-screen flex flex-col gap-6 py-6" ref="rootRef">
    <!-- top -->
    <div class="text-center text-lg font-700 text-gray-4">
      <span>setInterval实现</span>
    </div>
    <div class="flex-1 flex items-center" ref="intervalRef">
      <span class="cube" :style="{ transform: `translateX(${intervalTranslateX}px) ` }"></span>
    </div>
    <div class="text-center text-lg font-700 text-gray-4">requestAnimationFrame实现</div>

    <div class="flex-1 flex items-center" ref="animRef">
      <span class="cube bg-red-7!" :style="{ transform: `translateX(${animTranslateX}px)` }"></span>
    </div>
  </div>
</template>
<script setup name="requestAnimationFrame" lang="ts">
  const rootRef = ref<HTMLElement | null>(null);
  const intervalRef = ref<HTMLElement | null>(null);
  const animRef = ref<HTMLElement | null>(null);
  const rootWidth = ref<number>(0);
  const animTranslateX = ref<number>(0);
  const intervalTranslateX = ref<number>(0);
  const step = 5;

  onMounted(() => {
    rootWidth.value = rootRef.value?.offsetWidth || 600;
    let timer = setInterval(() => {
      if (rootWidth.value - (intervalTranslateX.value + 100 + step) > 0) {
        intervalTranslateX.value += step;
      } else {
        clearInterval(timer);
      }
    }, 1000 / 60);
  });

  const run = () => {
    if (rootWidth.value - (animTranslateX.value + 100 + step) > 0) {
      animTranslateX.value += step;
      requestAnimationFrame(run);
    }
  };
  requestAnimationFrame(run);
</script>

<style scoped lang="scss">
  .cube {
    @apply bg-blue-7 inline-block;
    width: 100px;
    height: 100px;
    transition: all 1s linear;
  }
</style>
