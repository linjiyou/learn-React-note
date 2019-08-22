import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';
import './static/css/reset.min.css';
import Vote from './component/Vote-1';
import {createStore} from 'redux';



//=>创建容器：需要把render传递进来（登记了所有状态更改的信息）
 let reducer=(state={n:0,m:0},action)=>{
  
   switch(action.type){
        case 'VOTE_SUPPORT':
        state={...state,n:state.n+1};
        break;
        case 'VOTE_AGAINST':
        state={...state,m:state.m+1};
        break;
   }
   return state; //=>/最新的state返回，原有的状态才会被修改
 };

let store=createStore(reducer);
ReactDOM.render(
  <main>
    {/* title:标题 count：初始支持反对人数 */}
    <Vote title={'heeeeeeeeeeeee'} count={{
      n:100,
      m:78
    }} store={store}/>
  </main>
,document.getElementById('root'))
