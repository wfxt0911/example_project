<template>
  <div class="dark:text-slate-400 p-10">
    <div class="w-full text-3xl font-700 p-6 text-center">功能导航</div>
    <a-card>
      <template v-for="item in state.list" :key="item.path">
        <a-card-grid
          :style="{ width: item.width, 'background-color': item.bgColor }"
          class="text-lg text-white text-center font-700"
          @click="clickEvt(item.path)"
          >{{ item.label }}</a-card-grid
        >
      </template>
    </a-card>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter();
  const state = reactive({
    list: [
      {
        path: '/xlxs/lay-excel',
        label: 'lay-excel',
        width: '50%',
        bgColor: '#1abc9c',
      },
      {
        path: '/vue3/customRef',
        label: 'customRef',
        width: '50%',
        bgColor: '#2ecc71',
      },
      {
        path: '/css/grid',
        label: 'grid练习',
        width: '50%',
        bgColor: '#3462fd',
      },
      {
        path: '/demo/animejs',
        label: 'animejs',
        width: '50%',
        bgColor: '#8e44ad',
      },
      {
        path: '/demo/dynamicText',
        label: '跑马灯字体',
        width: '50%',
        bgColor: '#e74c3c',
      },
      {
        path: '/demo/imgLazy',
        label: '图片懒加载',
        width: '50%',
        bgColor: '#e67e22',
      },
      {
        path: '/demo/requestAnimationFrame',
        label: 'requestAnimationFrame',
        width: '50%',
        bgColor: '#8e44ad',
      },
    ],
  });
  const clickEvt = (e) => {
    router.push(e);
  };
</script>

<style lang="less" scoped>
  .items {
    @apply m-3 inline-block p-3 bg-blue-7 rounded text-white;
  }
</style>
