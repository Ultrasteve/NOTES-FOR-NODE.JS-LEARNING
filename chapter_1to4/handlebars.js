var express = require('express');

var app = express();

//defaultLayout：指定默认布局文件(没带后缀) 后面的render都会render到main.handlebars中,所有.handlebars要放在一个文件夹里
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});

app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars'); //只是设置了一个键值对

var fortune = 'today will be lucky';

app.get('/',function(req, res){
	res.render('./layouts/home',{fortune: fortune}); //简单的渲染其中一个变量
});

app.listen(3000,function(){
	console.log('success');
});