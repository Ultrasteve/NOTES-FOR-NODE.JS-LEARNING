###Express中的方法: 
'app.use(callback())'---用于为当前脚本添加中间件<br/>
(在本章，你可以把它看作是用于处理那些没有路由匹配路径的处理器)<br/>
'app.get(route, callback())'---用于处理路由，执行callback函数<br>
(注意：app.get()的匹配为从上到下，处理流程类比成cisco中的访问控制列表)<br>
'app.listen(port, callback())'---监听port<br><br>

若把app.use()放在app.get()的前面，会阻塞后面的method  
  
####本章实验：  
        handlebars.js //模板渲染  
        routing.js //路由处理