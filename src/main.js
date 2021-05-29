import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "font-awesome/css/font-awesome.min.css";
import axios from 'axios';
import Vuelidate from 'vuelidate'
import VueAlertify from 'vue-alertify'
import VueApexCharts from 'vue-apexcharts'
import '@/assets/font/flaticon.css'

Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(VueAlertify)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false


Vue.prototype.$http =  axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: { "Content-Type": "application/json"}
});
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer '+token

}
new Vue({
  render: h => h(App),
  router,
    store
}).$mount('#app')
