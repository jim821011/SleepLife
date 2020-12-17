import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap"
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { ValidationObserver, ValidationProvider, extend, localize, } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import * as rules from 'vee-validate/dist/rules';
import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import animated from 'animate.css'


Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('zh_TW', TW);

import App from './App.vue'
import router from './router'
import './bus'
import CurrencyFilter from './filters/currency'
import DateFilter from './filters/date'

Vue.config.productionTip = false
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper)
axios.defaults.withCredentials = true;
Vue.component("loading", Loading)
Vue.filter('CurrencyFilter', CurrencyFilter)
Vue.filter('DateFilter', DateFilter)
Vue.use(animated)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 路由守衛
router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  if(to.meta.requiresAuth){
      const api = `${process.env.VUE_APP_APIPATH}api/user/check`;
      axios.post(api)
      .then((res)=>{
        // console.log(res.data)
        if(res.data.success){
          next()
        }else{
          next({
            path:'/login'
          })
        }
      })
  }else {
    next()
  }
})