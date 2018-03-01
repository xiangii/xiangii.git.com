<template>
  <div class="show-blogs">

      <div class="content">
          <div>
              <input type="text" v-model="serch" placeholder="请输入你要搜索的数据" class="serch"/>
          </div>
          <h2>博客所有内容</h2>
          <div v-for="items in serdata" :key=" items.title " class="container">
             <ul>
                 <li v-color:color="'#'+(Math.random()-0).toString().slice(2,8) ">
                    <router-link v-bind:to="  '/ditels/' + items.id">     {{ items.title }}  </router-link>
                 </li>
                 <li>{{ items.author  | add-author  }}</li>
                 <li>{{ items.content | slice-content}}</li>
                 <li>分类： <span v-for="lei in items.con_class" :key="lei"> {{ lei }}</span> </li>
             </ul>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    name:'ShowBlogs',
    data(){
        return {
            blogs:[],
            serch:''
        }
    },
    methods:{
        get:function(){
            this.$http.get("https://wd9500649839kalrce.wilddogio.com/blogs.json",{

            }).then(function(data){
                var arry = [];
                for(let i in data.body){
                    arry.push(data.body[i]);
                   
                };
                //console.log(data)
               // this.blogs = arry;
                //console.log(data.body);
                return data.json();
            }).then(function(data){
                var arryid = []
               // cosole.log(data);
                for(let key in data){
                  //  console.log(key);
                    data[key].id = key;
                    arryid.push(data[key]);
                    this.blogs = arryid;
                }
                console.log(arryid)
            })
        }
    },
    created(){
        this.get();
    },
    computed:{
        serdata(){
            return this.blogs.filter((blogs)=>{
                return blogs.title.match(this.serch)
            })
        }
    },
    filters:{
        addAuthor(value){
            return '作者： '+value;
        },
        sliceContent(val){
            console.log(val.length);
            if(val.length>=100){
                return val.slice(1,100)+'...'
            }
            return val
        }
    },
    directives:{
        color(el,binding,vnode){
            if(binding.arg || binding.value){
                el.style[binding.arg] = binding.value
            }else{
                el.style.color = "blue"
            }
        }
    }
}
</script>
<style scoped>
.content{
    width: 700px;
    margin: 0 auto;
}
.container{
    width: 700px;
    height: auto;
    padding: 20px 10px 20px 10px;
    box-sizing: border-box;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.container li:nth-child(1){
    margin-top: 0px;
    font-weight: 800;
    font-size: 16px;

}
.container li:nth-child(2){
    color: #777;
    font-size: 12px;
}
.container li{
    margin-top: 10px;
}
.serch{
    width: 700px;
    height: 40px;
    color: rgb(5, 110, 102);
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    outline-color: rgb(5, 110, 102);
    padding:10px;
    box-sizing: border-box
}
</style>
