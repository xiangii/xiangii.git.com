<template>
  <div class="head">
      <nav>
         <ul>
             <router-link to="/">首页</router-link>
             <router-link to="/add">写博客</router-link>
         </ul>
      </nav>
  </div>
</template>
<script>
export default {
  name:"Head",
  data(){
      return {
          msg:'我是头部'
      }
  }
}
</script>
<style scoped>
.head nav{
    width: 100%;
    height: auto;
    background: rgb(8, 47, 97);

}
.head nav ul{
    width: 700px;
    height: auto;
    margin: 0 auto;
}
.head nav ul li{
    display: inline-block;
}
.head nav ul a{
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 10px 20px;
}
.router-link-exact-active{
    background:rgb(5, 2, 59);
}
</style>
