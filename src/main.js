import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './console'

console.display('Looking for the source? You can find it here:')
console.log('https://github.com/MaximVanhove/maximvanhove')
console.gif()

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
