<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <head-blogs></head-blogs>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import HeadBlogs from './head/Head'
import Ditels from './components/Ditels'

export default {
  name: 'App',
  components: {
    AddBlog,
    ShowBlogs,
    HeadBlogs,
    Ditels
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0
}
 li{
   list-style: none
 }
</style>
