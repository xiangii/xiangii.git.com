<template>
    <div class="add-blog">
        <div v-if="bool">
            <h4>添加博客</h4>
            <ul id="ed">
                <li>
                    <label for="">博客标题:</label>
                    <input type="text" v-model="blogs.title" class="radius" />
                </li>
                <li class="re">
                    <label for="">博客内容:</label>
                    <textarea v-model="blogs.content" class="ab"></textarea>
                </li>
                <li>
                    <label for="">分类:</label>
                    <span>         
                        <input type="checkbox" value="node.js" v-model="blogs.contentClass"/> node.js
                        <input type="checkbox" value="vue.js"  v-model="blogs.contentClass"/> vue.js
                        <input type="checkbox" value="angular.js"  v-model="blogs.contentClass" /> angular.js
                        <input type="checkbox" value="reac.js"   v-model="blogs.contentClass" /> react.js 
                    </span>
                </li>
                <li>
                    <label for="">作者</label>
                    <input type="text" v-model="blogs.author" class="radius">
                </li>
            </ul>
            <button class="btn" v-on:click.prevent="post">发表</button>

            <div class="tishi">
                <ul>
                    <li>
                        <span>博客标题：</span>{{ blogs.title}}
                    </li>
                    <li>
                        <span>博客内容：</span>{{ blogs.content}}
                    </li>
                    <li>
                        <span>博客分类：</span>
                        <i v-for="item in blogs.contentClass" :key="item">
                            {{item}}
                        </i>
                    </li>
                    <li>
                        <span>博客作者：</span>{{ blogs.author}}
                    </li>
                </ul>
             </div>
        </div>
            
        <div v-show="!bool" class="break-index">
            添加博客成功点击返回<router-link to="/">首页</router-link>查看
        </div>

        
  </div>
</template>
<script>
export default {
    name:'AddBlog',
    data(){
        return {
            blogs:{
                title:'',
                content:'',
                contentClass:[],
                author:''
            },
            bool:true
        }
    },
    methods:{
        post(){
            if(!this.blogs.title  || !this.blogs.content || !this.blogs.author || !this.blogs.contentClass){
                alert("请完善你的内容")
            }else{
                this.$http.post("https://wd9500649839kalrce.wilddogio.com/blogs.json",{
                    title:this.blogs.title,
                    content:this.blogs.content,
                    author:this.blogs.author,
                    con_class:this.blogs.contentClass
                }).then(function(data){
                    this.bool = false
                })
            }
            
        }
    }
}
</script>
<style scoped>
.add-blog{
    width: 700px;
    margin: 0 auto;

}
h4{
    font-size: 20px;
    font-family: "微软雅黑";
    width: 700px;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    font-weight: blod;
    margin-top: 20px;

}
#ed li{
    margin-top: 20px;
    width: 100%;
    height: 44px;
    line-height: 44px;
}
#ed li label{
    color: rgb(10, 56, 83);
}
#ed li:nth-child(1) input{
    width: 500px;
    margin-left: 10px;
    color: rgb(0, 89, 255);
    height: 28px;
    margin-top: -2px;
    padding: 0 0 0 10px;
    box-sizing: border-box
}
#ed li:nth-child(2) label{
    top: 0;
    display: block;
}
#ed li:nth-child(2) textarea{
    width: 500px;
    height: 100px;
    top: 0;
    left: 82px;
    max-width: 500px;
    min-width: 500px;
    max-height: 100px;
    min-height:100px;
    outline: none;
    padding: 10px;
    border-radius: 4px;
    font-feature-settings: "微软雅黑";
    color: #666;
    font-weight: 800px;
    box-sizing: border-box
} 
#ed li:nth-child(3){
    margin-top: 80px;
}
#ed li:nth-child(3) label{
    display: inline-block;
}
#ed li:nth-child(3) input{
    margin-left: 20px;
    cursor: pointer;
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
}
#ed li:nth-child(3) span{
    margin-left: 20px;
    font-size: 14px;
    height: 16px;
    line-height:16px;
}
#ed li:nth-child(4) input{
    margin-left: 43px;
    width: 500px;
    height: 28px;
    padding: 0 0 0 10px;
    box-sizing: border-box
}
.btn{
    width: 100px;
    height: 40px;
    background: rgb(25, 39, 104);
    color: white;
    border: none;
    border-radius: 2px;
    margin-top: 20px;
    cursor: pointer;
}
.btn:hover{
    background: rgb(10, 18, 51);
}
.tishi{
    margin: 40px 0 0 0;
}
.tishi span{
    color: rgb(129, 105, 219);
}
.tishi li,.tishi li i{
    color: red
}
.tishi li{
    margin-top:10px;
}
.ab{
    position: absolute;
}
.re{
    position: relative;
}
.break-index{
    width: 700px;
    padding: 20px 0;
    text-align: center;
}
.radius{
    border-radius: 4px;
    outline: none;
    border: 1px solid #999
}
</style>
