<template>
  <div ref="rootRef" class="dynamic-text">
    <span class="dynamic-text-div">{{ _text }}</span>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  interface Props {
    text: string;
  }
  const props = defineProps<Props>();
  const rootRef = ref<HTMLElement>();
  const _text = ref<string>('');
  const append = () => {
    // const oldText = rootRef.value?.innerHTML;
    //清空旧数据
    rootRef.value && (rootRef.value.innerText = '');
    if (!rootRef.value) return;
    for (let index = 0; index < props.text.length; index++) {
      let span = document.createElement('span');
      span.className = 'dynamic-text-span';
      span.textContent = props.text[index];
      span.style.animation = 'fade 0.5s both';

      span.style.animationDelay = `${index * 0.02}s`;
      rootRef.value.append(span);
    }

    // 方案2
    // _text.value = '';
    // for (let index = 0; index < props.text.length; index++) {
    //   setTimeout(() => {
    //     _text.value += props.text[index];
    //   }, index * 50);
    // }
  };
  onMounted(() => {
    append();
  });
</script>

<style scoped lang="scss">
  .dynamic-text {
    &-span {
      display: inline-block;
      animation: fade 0.5s both;
    }
  }
</style>
