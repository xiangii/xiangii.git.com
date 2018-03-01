// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes/routes.js'



Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false
Vue.filter("add-slice",function(value){
  if(value.length>200){
    return value.slice(0,200)+".."
  }else{
    return value
  }
 
})
// Vue.filter("to-add",(value)=>{
//   return "作者：  " + value 
// })

// //设置一个自定义指令

// Vue.directive("randomcolor",{
//   bind(el,binding,vnode){
//     el.style.color = "#"+(Math.random()-0).toString().slice(2,8)
//   }
// })
/* eslint-disable no-new */
Vue.directive("color",{
  bind(el,binding,vnode){
    if(binding.value){
      el.style.color = binding.value
    }else{
      el.style.color = "blue"
    }


  }
})

const router = new VueRouter({
  routes:Routes,
  mode:'history'
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
