<template>
  <div w-screen h-screen bg-gray-7 text-white flex justify-center items-center p-20>
    <dynamicTextCpn
      text="点击B列任意单元格，通过按下CTRL+向下箭头的快捷键，可以直接跳转到最后一行。这个方法相对从地址栏输入要更加简单，也是更为常用的操作。童鞋们可以get起来"
    />
  </div>
</template>
<script setup lang="ts">
  import dynamicTextCpn from './components/dynamicTextCpn.vue';
</script>
<style scoped lang="scss"></style>
