import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import ELementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
console.log('ELementUI', ELementUI)
Vue.use(ELementUI)
new Vue({
    render: function(h) {
        return h(App)
    },
}).$mount('#app')
