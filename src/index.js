import React from 'react';
import ReactDOM from 'react-dom';
/* 我们一般把程序中的公用样式放到index中导入这样在其他组件也可以使用
（webpack会把所有的组件最后都编译到一起，index是入口 
2.导入boostrap，需要导入的是不经过压缩处理的文件，否则无法编译（真实项目zhong
boostrap已经是过去的事，一般中使用的都是ant来做
*/

import 'bootstrap/dist/css/bootstrap.css';
import Dialog from './component/Dialog-1';
 ReactDOM.render(<main>
     <Dialog content='hehe'/>
     <Dialog type={2} content='我的js很溜'/>
     <Dialog type='请登录' content={
         <div>
         <input type="text" className="form-control" placeholder="Username" />
             <br/>
             <input type="text" className="form-control" placeholder="Password" />
       
     
     </div>
     }>
      <button type='button' className='btn btn-success'>登录</button>
      <button type='button' className='btn btn-danger'>取消</button>
     </Dialog>
 </main>,document.getElementById('root'))







