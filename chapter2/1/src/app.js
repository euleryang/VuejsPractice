require('./app.scss');

// 模块化的引入 vue，并将其赋值给 Vue 变量
var Vue = require('vue');
var logoSrc =  require('./logo.png')

new Vue({
  el: "#app",
  template: "<h1>{{ msg }}</h1>",
  data () {
    return {
      msg: 'Hello Vue.js'
    }
  },
  render (h) {
    return (
      h('div', [
        h('img', {
          domProps: {
            src: logoSrc,
            alt: 'logo',
            className: 'logo'
          }
        }),
        h('h1', this.msg)
      ])
    )
  }
})