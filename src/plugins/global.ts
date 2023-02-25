import { App } from 'vue';
import lazyLoad from '/@/directives/lazyLoad';
export default {
  install(Vue: App<Element>) {
    Vue.directive('lazyLoad', lazyLoad);
  },
};
