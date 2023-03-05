<template>
  <div class="img-lazy p-6">
    <img :src="item" v-for="item in images" :key="item" v-lazyLoad />
  </div>
</template>

<script setup name="imgLazy" lang="ts">
  const images = reactive<string[]>([
    'https://img-blog.csdnimg.cn/img_convert/29576b39b36e5c8681ee5f58409c0939.png',
    'https://img-blog.csdnimg.cn/img_convert/ac3416110cce6fd635d27c248a0b4fcc.png',
    'https://img-blog.csdnimg.cn/img_convert/b66edfe5bd07f16c3245a8270a97de06.png',
    'https://img-blog.csdnimg.cn/img_convert/586dc56f36de6e74c6a8fd816043b828.png',
    'https://img-blog.csdnimg.cn/img_convert/e0caff5972b2b620b0a1aacde5c33888.png',
    'https://img-blog.csdnimg.cn/img_convert/6048591a7cf2c455aaf4ddc800029266.png',
    'https://img-blog.csdnimg.cn/img_convert/64ba0169000f4650bb984fcc3622ba86.png',
    'https://img-blog.csdnimg.cn/img_convert/639e2439552cab7c4b58d3d2e21c170d.png',
    'https://img-blog.csdnimg.cn/img_convert/76351788d26e57a90e758004a9be4da2.png',
    'https://img-blog.csdnimg.cn/img_convert/41dfef919cca8fc8666b5e0f4a86a08d.png',
    'https://img-blog.csdnimg.cn/img_convert/96f3d6652819d02538ba9e5603df1815.png',
    'https://img-blog.csdnimg.cn/img_convert/e2a5e7840655b3b51cb498712f9b924d.png',
  ]);
</script>

<style lang="less" scoped>
  .img-lazy {
    img {
      @apply w-160 h-100 block mx-auto mb-6 rounded;

      &:not([src]) {
        opacity: 0;
      }
    }
  }
</style>
