使用的技术:   express+mysql+ejs<br/>
api接口<br/>
        '/article?id=xxx' 打开文章详情页面
        '/article?id=xxx&act=like' 点赞<br/>
        

数据字典<br/>
使用的mysql数据库<br/><br/>
1.banner(banner_table)<br/>
	id<br/>
	title		标题		varchar(100)<br/>
	sub_title	副标题		varchar(100)<br/>
	src		图片地址	varchar(200)<br/>

2.文章(article_table)<br/>
	id
	author		作者		varchar(16)<br/>
	author_src	作者头像	varchar(200)<br/>
	title		标题		varchar(100)<br/>
	post_time	发布时间(s)	int<br/>
	content		内容		text<br/>
	n_like		赞		int<br/>

3.用户(user_table)<br/>
<hr/>
	id
	username	用户名		varchar(32)<br/>
	password	密码		varchar(32)<br/>
	src		头像		varchar(64)<br/>
