export default [
  {
    path: '/',
    component: () => import('/@/views/index.vue'),
  },
  {
    path: '/xlxs/lay-excel',
    component: () => import('/@/views/xlxs/lay-excel.vue'),
  },
  {
    path: '/vue3/customRef',
    component: () => import('/@/views/vue3/customRef.vue'),
  },

  {
    path: '/css/grid',
    component: () => import('/@/views/css/grid.vue'),
  },
  {
    path: '/demo/animejs',
    component: () => import('/@/views/demo/animejs.vue'),
  },
  {
    path: '/demo/dynamicText',
    component: () => import('/@/views/demo/dynamicText.vue'),
  },
  {
    path: '/demo/imgLazy',
    component: () => import('/@/views/demo/imgLazy/index.vue'),
  },
  {
    path: '/demo/requestAnimationFrame',
    component: () => import('/@/views/demo/requestAnimationFrame/index.vue'),
  },
  {
    path: '/demo/deepCopy',
    component: () => import('/@/views/demo/deepCopy/index.vue'),
  },
];
