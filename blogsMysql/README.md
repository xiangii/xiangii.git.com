使用的技术:   express+mysql+ejs
api接口
        '/article?id=xxx' 打开文章详情页面
        '/article?id=xxx&act=like' 点赞
        
***********************************************
数据字典
使用的mysql数据库
1.banner(banner_table)
	id
	title		标题		varchar(100)
	sub_title	副标题		varchar(100)
	src		图片地址	varchar(200)

2.文章(article_table)
	id
	author		作者		varchar(16)
	author_src	作者头像	varchar(200)
	title		标题		varchar(100)
	post_time	发布时间(s)	int
	content		内容		text
	n_like		赞		int

3.用户(user_table)
	id
	username	用户名		varchar(32)
	password	密码		varchar(32)
	src		头像		varchar(64)