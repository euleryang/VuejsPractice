// 模块化的引入 vue，并将其赋值给 Vue 变量
import hello1 from './hello1.vue'
import Vue from 'vue';

new Vue({
  el: "#app",
  template: "<hello1/>",
  components: {
    hello1
  }
})