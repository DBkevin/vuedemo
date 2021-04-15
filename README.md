# 电影网站项目说明
该项目是一个基于vue搭建的电影网站学习项目。逐步实现以下功能
# 该项目包含的功能如下：
-  网站的电影显示下载地址;
-  网站的电影添加、修改、删除等后台管理;
-  网站的前端预览;
## 用户系统
-  用户的注册功能;
-  用户的登陆功能;
-  用户资料的的显示功能;
-  用户对于每个资源的评论功能;
-  用户对于资源的点赞功能;
-  用户对于资源的下载功能;
-  用户的基本权限控制功能;
-  用户的密码找回功能;
-  用户的对bug或者需求发送站内信给管理员的功能;
-  后台对于用户评论删除功能;
-  后台对于用户审核功能;
-  后台对于用户的管理(封停，重置密码等);
-  后台对用户的权限控制;
## 其他显示部分
-  主页的推荐及更新排行榜功能;
-  主页的文章功能;
-  后台对主页的推荐及大图的编辑功能;
-  后台对主页的文章查看功能;

## 网站路由设计
网站路由分为2类，用户和后台，用户路由为：
```
http://url.com/访问的路由具体名称
```
后台路由为：
```
http://url.com/admin/访问的路由具体名称
```
## 数据库搭建
该项目我们使用`MongoDB`来做为数据库。[MongoDB文档](https://www.mongodb.org.cn/manual/)
### 数据字段分解
根据上面的功能分解，一个电影资源的数据如下：
- 电影名称 movieNmae  String;
- 电影主页显示图片 movieImg string;
- 电影预告片 movieVideo string;
- 电影下载地址 movieDownload string;
- 电影更新时间 movieTime string;
- 电影点赞数 movieNumSuppose int;
- 电影下载数 movieNumDownload int;
- 是否首页推荐该电影 movieMainPage Boolena;
- 电影评论人 user_id string;
- 电影评论名称 context string;
评论单独放一个`comment`表中，关联用户
对用户模块分解，一个用户需要的数据如下：
- 用户名称 username string;
- 用户密码 password string;
- 用户邮箱 userMail string;
- 用户手机号码 userPhone string;
- 用户是否是后台管理用户 userAdmin Boolean;
- 用户权限 userPower int;
- 用户是否封停 userStop Boolean;
对页面前端分解，需要的数据如下:
- 主页显示大图 recommendImg string;
- 主页跳转链接 recommendSrc string;
- 主页大图标题 recommendTitle string;
站内信功能需要的数据如下：
- 发送人 mailToUser string;
- 接受人 mailFromUser string;
- 内容 mailContext string;
- 标题 mailTitle string;
- 发送时间 mailSendTime:String;
文章功能需要的数据如下:
- 文章名称 articleTitle string;
- 文章内容 articleContext string;
- 文章时间 articleTime string;
## API和路由设计
| 功能说明 | API路由|
| :----| :-----|
| 显示电影列表| /movie/list|
| 通过电影id显示具体下载地址| /movie/download|
| 后台添加 |/admin/movieAdd|
| 后台 删除电影| /admin/movieDel|
| 后台 修改电影 |/admin/movie |
| 电影预览播放地址以及详情| /movie/detail |
| 显示电影的评论| /movie/comment |
| 电影的点赞数，下载数| /movie/showNumber|
|用户注册|/users/register|
| 用户登陆|/users/login|
|评论电影|/users/postComment|
|点赞（不一定非要登陆）|/movie/support|
|增加下载资源量|/movie/download|
|验证某项功能是否可用|/users/getPower|
|密码重置|/users/findPaaword|
|发送站内信|/users/sendEmail|
|后台查看用户所有评论|/admin/checkComment|
|后台删除所有评论|/admin/delComment|
|后台封停用户|/admin/stopUser|
|后台重置用户密码|/admin/changeUser|
|后台修改用户资料及状态|/admin/showUser|
|后台修改用户权限|/admin/powerUser|
|用户信息前台展示|/showUser|
|后台查看所有评论列表|/admin/commentList|
|主页的推荐内容|/showIndex|
|主页的排行榜显示|/showRanking|
|主页的文章列表|/showArtice|
|后台文章编辑|/admin/addArtice|
|后台主页推荐|/admin/addRecommend|
|后台主页删除推荐|/admin/delRecommend|
|后台主页大图推荐修改|/admin/updateRecommend|
|后台文章删除|/admin/delArtice|
|后台主页文章查看|/articleDetail|


