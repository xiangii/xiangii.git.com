var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();
var path = require('path');
var fs = require('fs');
var mysql = require('mysql');


var time = require('./model/data.js');

//静态文件托管
app.use(express.static('./public'));
//设置cookie解析及密钥
app.use(cookieParser('abcdefj'));
//设置解析session
app.use(cookieSession({
    name:'blog',
    keys:['aaa','fff','ffff'],
    maxAge:20*3600*1000
}));
//解析post数据
app.use(bodyParser())
//设置文件上传路径
var objMulter = multer({
    dest:'./public/upload'
})
//设置模板引擎
app.set('view engine','ejs')

//连接mysql数据库
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'blog'

})

app.get('/testsql',(req,res)=>{
    db.query("select * from `user`",(err,data)=>{
        if(err){
            console.log(err);
            return
        }
        res.send('连接数据库成功')
    })
})

app.get('/favicon.ico',(req,res,next)=>{
    next()
})

app.get('/',(req,res,next)=>{
    //查询数据库banner表
    db.query("select * from `banner`;",(err,data)=>{
        if(err){
            res.status(500).send('erry').end();
            return;
        };
      //把得到的数据发送给模板引擎
    //    res.render('index',{
    //        banner:data
    //    });
       res.banner=data;
       next()
    })
    
})

app.get('/',(req,res,next)=>{
    //查询文章列表
    db.query("select id,title,summery,author_pic from `article`",(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data)
        res.article = data;
        next()
    })
})

app.get('/',(req,res)=>{
    //渲染首页
    res.render('index',{
        banner:res.banner,
        article:res.article
    })
})


app.get('/article',(req,res)=>{
    if(req.query.id){//判断ID是否存在
        if(req.query.act == 'like'){//判断路由点赞还是文章详情页
            db.query(`update article set n_like=n_like+1  where id=${req.query.id}`,(err,data)=>{
                if(err){
                    res.send('404').end();
                    return;
                }
            })
        }
        //显示文章
        db.query(`select * from article where id=${ req.query.id}`,(err,data)=>{
            if(err){
                res.send('文章找不到');
                return;
            }
            var date = data[0].post_time;
            data[0].post_time = time.time(date);//将时间戳转化为数字并修改

            var content = data[0].content;
            var contentP = content.replace(/^/gm,'<p>').replace(/$/gm,'</p>')//为文章内容添加 <p>
            data[0].content = contentP;
            //开始渲染
            res.render('article',{
                articleData:data[0]
            })
        })     
    }else{
        res.status(404).send('你请求的页面找不到').end()
    }
})


app.listen(80,()=>{
    console.log('http://localhsot')
})



// 数据字典
// 使用的mysql数据库
// 1.banner(banner_table)
// 	id
// 	title		标题		varchar(100)
// 	sub_title	副标题		varchar(100)
// 	src		图片地址	varchar(200)

// 2.文章(article_table)
// 	id
// 	author		作者		varchar(16)
// 	author_src	作者头像	varchar(200)
// 	title		标题		varchar(100)
// 	post_time	发布时间(s)	int
// 	content		内容		text
// 	n_like		赞		int

// 3.用户(user_table)
// 	id
// 	username	用户名		varchar(32)
// 	password	密码		varchar(32)
// 	src		头像		varchar(64)




