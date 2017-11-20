import Vue from 'vue'
import App from './App.vue'
import Artist from './components/artist.vue'
import Spinner from './components/spinner.vue'
import Select from 'vue-materialize/select'
import Option from 'vue-materialize/select-option'

Vue.component('artist', Artist)
Vue.component('spinner', Spinner)
Vue.component('v-select', Select)
Vue.component('v-option', Option)


new Vue({
  el: '#app',
  render: h => h(App)
})
