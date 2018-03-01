<template>
    <div id="ditels">
             <div class="bar-2">
                <router-link to="/">首页</router-link>
                <span class="nav-to">> {{ ditels.title }}</span>
            </div>
            <h3>{{ ditels.title }}</h3>
           
            <div class="container">
                <span>{{ ditels.author | add-author }}</span>
                <p>
                    {{ ditels.content}}
                </p>

                <ul>
                    <li v-for="item in ditels.con_class" :key="item">
                        {{ item }}
                    </li>
                </ul>
            </div>
    </div>
</template>
<script>
export default {
  name:'Ditels',
  data(){
      return {
          id:this.$route.params.id,
          ditels:{}
      }
  },
  methods:{
    
  },
  created(){
       // console.log(this.$route.params.id);
       this.$http.get('https://wd9500649839kalrce.wilddogio.com/blogs/'+this.id+'.json',{
          }).then((data)=>{
              return data.json();
          }).then((data)=>{
              this.ditels = data;
              console.log(this.ditels)
          })
  },
  filters:{
      addAuthor(data){
          return '作者： '+data
      }
  }
}
</script>
<style scoped>
#ditels{
    width: 700px;
    margin: 0 auto;
}
h3{
    width: 700px;
    padding: 10px 0 5px 0;
}
a{
    font-size: 12px;
    text-decoration: none;
    color:rgb(6, 36, 202)
}
.nav-to{
    font-size: 12px;
    color:#666
}
.bar-2{
    padding: 10px 0 10px 0;
    border-bottom:1px solid #f9f9f9;

}
.container span{
    color:#666;
    font-size:14px;
}
.container p{
    margin:10px 0 0 0;
    text-justify:inter-ideograph;
    text-align:inherit;
    color:#444;
    font-size:16px;
    line-height: 22px;
}

</style>
