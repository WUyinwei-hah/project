
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import store from './store/Main'
import './base.css'
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(mavonEditor)
new Vue({
  vuetify,
  VueRouter,
  store,
  render: h => h(App)
}).$mount('#app')
