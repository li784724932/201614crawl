/**
 * Created by 18237 on 2017/3/26.
 */
var request=require('request');
var iconv=require('iconv-lite');
var cheerio=require('cheerio');
var debug=require('debug');
var logger=debug('crawl:read');

module.exports=function (url, callback) {
    //读取传入的URL地址并得到响应体body
   request({url,encoding:null},function (err,response,body) {
       //因为响应体是gbk编码的，所以需要转成UTF8字符串
       body=iconv.decode(body,'gbk');
       var movies=[];
       var $=cheerio.load(body);
       $('.keyword .list-title').each(function () {
           var $this=$(this);
           var movie={
               name:$this.text(),
               url:$this.attr('href')
           };
           logger(`读取到电影:${movie.name}`)
           movies.push(movie);
       })
       callback(err,movies)


   })
};
var url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
module.exports(url,function (err,movies) {

});
