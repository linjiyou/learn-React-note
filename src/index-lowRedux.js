import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';
import './static/css/reset.min.css';
import Vote from './component/Vote-1';
import {createStore} from 'redux';



// export default class Vote extends React.Component{
//     constructor(props){
//         super(prosp);
//     }
//     render(){
//        return <section>

//         </section>
//     }
// }

//=>全局下挂载一个容器来实现信息共享和通信
     let myRedux=(function anonymous(){
       let stateObj={},
           listenAry=[];
        function updateState(callBack){
          //=>callBack:回调函数中一定时修改并且返回最新的状态信息的,用返回的状态信息替换原
          // 有的状态信息
          let  newObj=callBack(stateObj);
          stateObj={...stateObj,...newObj}
          //=》当状态更改：通知计划表中的方执行
            listenAry.forEach(item=>{
              if(typeof item ==='function'){
                item();
              }
            })

        };
        function getState(){
          return stateObj;
        };
        function subscribe(fn){
          for(let i=0;i<listenAry.length;i++){
            let item=listenAry[i];
            if(item===fn){
              return;
            }
          }
          listenAry.push(fn);
        };
        return{
          updateState,
          getState,
          subscribe
        }
     })();




ReactDOM.render(
  <main>
    {/* title:标题 count：初始支持反对人数 */}
    <Vote title={'heeeeeeeeeeeee'} count={{
      n:100,
      m:78
    }} myRedux={myRedux}/>
  </main>
,document.getElementById('root'))
