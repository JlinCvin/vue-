import '@/assets/style/theme/index.css';
import '@/assets/style/style.less'
import '@/assets/style/element-style.less'
import '@/assets/style/icon-style.less'
import '@/assets/style/hljs-style.css'
import ElementUI from 'element-ui';
import Vue from 'vue'
import router from '@/plugins/router'
import store from '@/plugins/store'
import config from '@/config'
import App from './App.vue'
Vue.use(ElementUI);
Vue.config.productionTip = false;
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
