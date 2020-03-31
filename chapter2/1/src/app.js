// 模块化的引入 vue，并将其赋值给 Vue 变量
var Vue = require('vue');

new Vue({
  el: "#app",
  template: "<h1>{{ msg }}</h1>",
  data () {
    return {
      msg: 'Hello Vue.js'
    }
  }
})