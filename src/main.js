import Vue from './components/ipElUi.js';
import App from './App.vue';
import router from './router/router.js';

import './css/base.scss' ;

// 引入图标库
import './components/icons/iconfont.css' ;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');