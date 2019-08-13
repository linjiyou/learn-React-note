import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

// //=>ES6中的EXTENDS继承，一但使用了CONSTRUCTOR，第一行位置必须设置SUPER执行：相当于React.Component.call(this)，也就是CALL继承，把父类私有的属性继承过来
//         //=>如果只写SUPER()：虽然创建实例的时候把属性传递进来了，但是并没有传递父组件，也就是没有把属性挂载到实例上，使用THIS.PROPS获取的结果是UNDEFINED
//         //=>如果SUPER(PROPS)：在继承父类私有的时候，就把传递的属性挂载到了子类的实例上，CONSTRUCTOR中就可以使用THIS.PROPS了

//         //=>PROPS：当RENDER渲染并且把当前类执行创建实例的时候，会把之前JSX解析出来的PROPS对象中的信息（可能有CHILDREN）传递给参数PROPS => “调取组件传递的属性”
    
//         /*
//          * this.props：属性集合
//          * this.refs：REF集合（非受控组件中用到）
//          * this.context：上下文
//          */
//  class Dialog extends React.Component{
       
//     constructor(props,context){
       
//           super(props);
// //=>如果只写super();虽然创建实例的时候把属性传递进来了，但是并没有传递父
// //=>也就是没有把属性挂载到实例上，使用this.props获取的结果是undefined
// /* 
// 如果super(props):在继承父类的私有属性的时候，把传递的属性挂载到了子类的实例上
// constructor中就可以使用this.props

// */

// //=>props：当render渲染并且把当前类执行创建的实例的时候，会把之前jsx解析
// //=>出来的props对象中的信息（可能有children）传递给参数props“调取组件传递的属性”
// // console.log(this.props)
//       }
//       componentWillMount(){
// /*
// 即使在constructor中不设置形参props接受属性，执行super的时候也不传这个属性
// 出来constructor中不能直接使用this.props，其他生命周期函数中都可以使用（
// 也就是执行完成constructor，react已经帮我们把传递的属性接收，并且挂载到实例上）
    
//     */
//         console.log(this.props)
//       }
//       static propTypes={
//         // con :propTypes.string //传递的内容是字符串
//         con: propTypes.isRequired //不仅传递的内容是字符串，并且还必须传递。
//      }
//       render(){
//           let {con}=this.props;
//           return <section>
//               <h3>
//               系统提示
//               </h3>
//               <div>{con}</div>
//           </section>
//       }
//   }
//   ReactDOM.render(<div>
//  <Dialog con={3}>
//      <span></span>
//  </Dialog>
//   </div>,document.getElementById('root')) 
//  function Clock(){
//      return <div style={{color:'blue',fontWeight:'blod'}}>
//          <h3>当前北京时间为</h3>
//          <div>{new Date().toLocaleString()}</div>
//      </div> 
//  }
//  ReactDOM.render(<Clock>

//  </Clock>,
//     document.getElementById('root'))
// setInterval(()=>{
//     ReactDOM.render(<Clock>

//         </Clock>,
//            document.getElementById('root'))
// },1000)
class Clock extends React.Component{
        constructor(){
            super();
            this.state={
                time:new Date().toLocaleString()
            }
        }
        componentDidMount(){
            //=>react生命周期函数之一：第一次组件渲染完成后触发
            setInterval(()=>{
            //=>react虽然可以修改状态，但是并不会通知react重新渲染页面
            // this.state.time=new Date().toLocaleString();
            //=>修改组件的状态 ：1.修改的部分状态：会用我们传递对象和初始化
            this.setState({
                time:new Date().toLocaleString()
            });
            },1000)
        }
        render(){
            return <div style={{color:'blue',fontWeight:'blod'}}>
            <h3>当前北京时间为</h3>
              <div>{this.state.time}</div>
          </div> 
        }
}
ReactDOM.render(<Clock/>,document.getElementById('root'));