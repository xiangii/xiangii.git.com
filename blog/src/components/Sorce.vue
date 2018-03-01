<template>
  <div class="sorce">
      <input type="text" placeholder="请输入搜索关键字"  v-model="serch">
      <div v-for="item in blogs" :key="item.title" class="box">
          
          <h2 v-color>{{ item.title }}</h2>
          <p class="author">{{ item.author | add-author }}</p>
          <span class="con_class">分类：</span>
          <em v-for="k in item.con_class" :key="k" class="cl">
              {{ k }}
          </em>   
         
       
          <router-link v-bind:to="'/xiang/'+item.id">
                 <p class="content">{{ item.content | add-slice}}  </p>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg:'hello word',
            blogs:[],
            serch:''
        }
    },
    methods:{
        get(){
            this.$http.get('https://wd9500649839kalrce.wilddogio.com/blogs.json')
            .then((data)=>{
                return data.body;
            }).then((data)=>{
                var blogArry = [];
                for(var key in data){
                    data[key].id = key;
                    //console.log(data[key]);
                    blogArry.push(data[key])
                };
                this.blogs = blogArry;
                console.log(this.blogs)
            })
        }
    },
    created:function(){
        this.get()
    },
    filters:{
        addAuthor(val){
            return "作者："+val
        }
    }
}
</script>

<style>
.sorce{
    width: 700px;
    height: auto;
    margin: 0 auto;
}
.sorce h2{
    font-size: 20px;
    font-weight: 500;
    height: 1.4em;
    display: flex;
    align-items: center;
}
.author{
    font-size: 14px;
    color: #555;
    padding-left: 10px;
}
.box{
    padding: 10px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 10px;
}
.content{
    color: #444;
    padding: 10px;
    text-align: justify;
    text-indent: 2em;
}
.con_class, .cl{
    font-size: 12px;
    color: red;
    padding-left: 10px;
}
input{
    width: 100%;
    height: 36px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #555;
    padding: 8px;
    box-sizing: border-box;
    outline-color: blue;
    font-family: "微软雅黑";
    font-size: 18px;
}
</style>
