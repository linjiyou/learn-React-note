import React from 'react';
// 函数式组件
//  function Vote(props){
//      let {title}=props;
//     return <section className={'panel panel-default'} style={{width:'50%'
//     ,margin:'20px auto'}}>
//         <div className={'panel-heading'}>
//             <h3 className={'panel-title'}>
//                 {title}
//             </h3>
//         </div>
//         <div className={'panel-body'}>
//             支持人数：<span>0</span>
//             <br/>
//             反对人数：<span>0</span>
//             <br/>
//             支持比率：<span>0%</span>
//             <br/>
//         </div>
//         <div className={'panel-footer'}>
//             <button className={'btn btn-success'} onClick={()=>{

//             }}>支持</button>
//             &nbsp;&nbsp;&nbsp;
//             <button className={'btn btn-danger'}>反对</button>
//         </div>
//         {/* 存放自己调取组件时候，额外扩展 */}
//         {/* {props.children} */}
//         {React.Children.map(props.children,item=>{
//             return item
//         })}
//     </section>
// }
//  =>基于类创建组件（基于继承component类实现的）  
// class Vote extends React.Component{
//          constructor(props){
//              super(props);//=>React.Component.call(this)可以把component中的私有属性继承过来
//  //=> this.props/this.state(this.setState)/this.contect/this.refs/this.updater
//                 //=>初始化状态
//                 this.state={
//                    n:0,
//                    m:0 
//                 }
//          }
     

         
//          render(){
//              let {title,children}=this.props;
//              let {n,m}=this.state;
//              let rate=(n/(n+m))*100;
//              if(isNaN(rate)){
//                  rate=0
//              }
//             return <section className={'panel panel-default'} style={{width:'50%'
//                 ,margin:'20px auto'}}>
//                     <div className={'panel-heading'}>
//                         <h3 className={'panel-title'}>
//                           {title}
//                         </h3>
//                     </div>
//                     <div className={'panel-body'}>
//                         支持人数：<span>{n}</span>
//                         <br/>
//                         反对人数：<span>{m}</span>
//                         <br/>
//                         支持比率：<span>{rate.toFixed(2)}%</span>
//                         <br/>
//                     </div>
//                     <div className={'panel-footer'}>
//                         <button className={'btn btn-success'} 
//                         onClick={this.support}>支持</button>
//                         &nbsp;&nbsp;&nbsp;
//                         <button className={'btn btn-danger'} 
//                         onClick={this.against}>反对</button>
//                     </div>
//                     {/* 存放自己调取组件时候，额外扩展 */}
//                     {children}
                  
//                 </section>
//          }
//          support=ev=>{
//           //=>使用箭头函数式为了保证方法中的this永远是实例本身（无论在哪执行这个方法）
//           //=>ev.target:获取当前操作的事件源（dom元素）
//           this.setState({
//             //   修改状态信息并且通知render重新渲染（异步操作：如果有其他代码执行，先执行其他代码，
//             // 然后再通知状态修改）
//               n:this.state.n+1
//           },()=>{
//             //=> 回调函数一般不用：当通知状态更改完成，并且页面重新渲染完成后，执行回调  
//           })
//          };
//          against=ev=>{
//            this.setState({
//                m:this.state.m+1
//            })
//          };
// }

class Vote extends React.Component{
         constructor(props){
             super(props);
         }
     

         
         render(){
           let {title,children}=this.props;
            return <section className={'panel panel-default'} style={{width:'50%'
                ,margin:'20px auto'}}>
                    <div className={'panel-heading'}>
                        <h3 className={'panel-title'}>
                          {title}
                        </h3>
                    </div>
                    <div className={'panel-body'}>
                        支持人数：<span ref={'AA'}>0</span>
                        <br/>
                        反对人数：<span ref={'BB'}>0</span>
                        <br/>
                        支持比率：<span ref={'RATE'}>0%</span>
                        <br/>
                    </div>
                    <div className={'panel-footer'}>
                        <button className={'btn btn-success'} 
                        onClick={this.support}>支持</button>
                        &nbsp;&nbsp;&nbsp;
                        <button className={'btn btn-danger'} 
                        onClick={this.against}>反对</button>
                    </div>
                    
                    {children}
                  
                </section>
         }
         support=ev=>{
            this.refs.AA.innerHTML++;
            this.computed()
         }
         against=ev=>{
            this.refs.BB.innerHTML++;
            this.computed();
         };
         computed=()=>{
          let {AA,BB,RATE}=this.refs,
          n=parseFloat(AA.innerHTML),
          m=parseFloat(BB.innerHTML),
          ra=(n/(n+m)*100);
          if(isNaN(ra)){
              ra=0
          }
          RATE.innerHTML=ra.toFixed(2)+'%';
         }
}
   
export{Vote}