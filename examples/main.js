import Vue from 'vue'
import App from './App.vue'
import VuePithyPagination from '../packages'

Vue.config.productionTip = false
Vue.use(VuePithyPagination)

new Vue({
  render: h => h(App)
}).$mount('#app')
