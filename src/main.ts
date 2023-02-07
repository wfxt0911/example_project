import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import piniaStore from './store';
import '/@/styles/index.less';
import '/@/styles/reset.less';
import 'uno.css';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';

// 支持SVG
import 'virtual:svg-icons-register';

const app = createApp(App);

app.use(router);
app.use(piniaStore);
app.use(Antd);
app.mount('#app');
