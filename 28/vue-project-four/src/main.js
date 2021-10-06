import Vue from 'vue'
import App from './App.vue'

import Color from './color'

Vue.directive('colored', Color)

new Vue({
    el: '#app',
    render: h => h(App)
})
