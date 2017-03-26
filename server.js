/**
 * Created by 18237 on 2017/3/26.
 */
let express=require('express');
let Movie=require('./model');

var path=require('path');
var app=express();
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.get('/',function (req,res) {
    Movie.find({},function (err, movies) {
        res.render('index',{movies})
    })


})


app.listen(8080);