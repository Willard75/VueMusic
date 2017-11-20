import Vue from 'vue'
import App from './App.vue'
import Artist from './components/artist.vue'
import Spinner from './components/spinner.vue'

Vue.component('artist', Artist)
Vue.component('spinner', Spinner)

new Vue({
  el: '#app',
  render: h => h(App)
})
