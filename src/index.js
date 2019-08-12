import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './component/Dialog';
import {createElement,render} from './2-jsx'
let root=document.getElementById('root');
ReactDOM.render(<div>
  {/* 注释：调取组件，只需要把组件当做一个标签调取 (单和双有区别)*/}
  {/* 数字要用大括号包起来 */}
  <Dialog con='lin'/>
  <Dialog con='ji' lx={2}>
      <span></span>
  </Dialog>
</div>,root)












// import {createElement, render} from './2-jsx';
// import {createElement,render} from './2-jsx';
// let root=document.getElementById('root');
let objJSX = createElement(
    'div',
    {id: 'box', className: 'box', style: {color: 'red'}},
    createElement(
        'h2',
        {className: 'title'},
        '\u7CFB\u7EDF\u63D0\u793A'
    ),
    createElement(
        'div',
        {className: 'content'},
        '\u6E29\u99A8\u63D0\u793A\uFF1A\u8BED\u6CD5\u9519\u8BEF\uFF01'
    ),
    '\u672C\u64CD\u4F5C\u5C31\u662F\u4E00\u4E2A\u6D4B\u8BD5\uFF01'
);
console.log(objJSX);
console.log(render(objJSX,root)) 






