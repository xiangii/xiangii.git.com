<template>
  <div>
      {{msg}}
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg:''
        }
    },
    created(){
        this.$http.get("https://wd9500649839kalrce.wilddogio.com/blogs/"+this.$route.params.id+".json")
        .then((data)=>{
            console.log(data.body);
            this.msg = data.body
        })
    }
}
</script>

<style>

</style>
