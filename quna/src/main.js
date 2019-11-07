// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from './config/rem'
//引入rem。js实现rem布局，可以省略。js
import reset from './config/reset.css'
import fastclick from 'fastclick'
//引入package中的插件直接输入名字即可，不需。/
fastclick.attach(document.body)
    //减少移动端点击事件延迟
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})