<template>
  <div class="flex justify-center items-center w-100vw h-100vh flex-col">
    <input v-model="inputValue" class="w-300px! border border-blue-500 border-solid" />
    <div class="mt-10">{{ inputValue }}</div>
  </div>
</template>
<script setup lang="ts">
  import { debounceRef } from '/@/utils/common';
  const inputValue = debounceRef('', 1000);
</script>
<style scoped lang="scss"></style>
