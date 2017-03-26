/**
 * Created by 18237 on 2017/3/26.
 */
let Movie=require('../model');
let async=require('async');
let logger=require('debug')('crawl:write');


module.exports=function (movies, callback) {
  async.forEach(movies,function (movie,cb) {
      Movie.create(movie,cb)
      logger(`写入电影:${movie.name}`)

  },callback)
}