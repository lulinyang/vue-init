import Vue from 'vue'
import router from './router'
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false


Vue.prototype.$axios = axios;
import store from '@/store/index'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
