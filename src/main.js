import Vue from 'vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
//import Bootstrap from 'bootstrap'

//Vue.use(Bootstrap)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
