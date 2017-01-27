###1.一些Handlebars的基础知识  
布局：放置在路径views/layouts，被渲染的对象，视图被拼接到布局上，形成用户所见到的页面。  
视图：放置在路径views，用于渲染布局。  

  
        res.render('foo');//将名字为foo的视图渲染到default的template上  
        res.render('foo',{layout:'about'});  
        //将名字为foo的视图渲染到名字叫about的layout上  
  
段落(section)：可以将一个视图文件中的不同部分渲染到一个布局文件中的不同部分中去  
使用方法:  

        //在实例化Handlebars的时候，添加一个叫做section的辅助方法  
        var hlb = require('express3-handlebars').create({  
            defaultLayout:'main',  
            helpers: {  
                section: function(name, options){  
                    if(!this._sections) this._sections = {};  
                    this._section[name] = options.fn(this);  
                    return null;
                }
            }
        });

        //视图文件中的
        {{#section 'head'}}
        {{/section}}
        //对应布局中的
        {{{_section.head}}}
  
局部文件:放置在路径views/partials中，是一个独立的component自身上下文与被渲染对象无关  
在视图中使用格式{{> weather}}可以自动引入一个局部文件 weather.handlebars  

块级表达式：  

        json object:
        {
            name:steve,
            date:20142020202,
            weather:'cloudy',
        }

        each块
        {{#each weather}}
        {{/each}}
        //循环获取json object中的weather，当each中想引入上一级的date，可以写成../date

        if块
        {{#if date}}
        {{else}}
        {{/if}}
        //若date为非空则。。。
  


