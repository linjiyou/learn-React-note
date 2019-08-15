import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';

// class A extends React.Component{
//     // static defaultProps={} 这个是第一个执行的，执行完成后（给属性设置默认值后）才向下执行
//     constructor(){
//         super();
//         console.log('1=constructor');
//         this.state={
//             n:1
//         };
        
//     }
//     componentWillMount(){
         //=>在will-mount中，如果直接的set-state修改数据，会把状态信息改变后，然后render
         
         
//         console.log('2=componentWillMount' ,this.refs.hh)
//     }
//     componentDidMount(){
//        console.log('4=componentDidMount',this.refs.hh)
//        /* 
//          真实项目中在这个阶段一般做如下处理
//          1.控制状态信息更改的操作
//          2.从服务获取数据，然后修改状态信息，完成数据绑定
//        */
//       setInterval(()=>{
//           this.setState({n: this.state.n +1})
//       },5000)

//     }
//     shouldComponentUpdate(nextProps,nextState){
//         /* 
//          在这个钩子函数中，我们获取的state不是最新修改的，而是上一次state值
//          但是这个方法有两个参数
//          nextProps：最新修改的属性信息
//          nextState：最新修改的状态信息
//         */
//         console.log('5=是否允许更新,函数返回true就是允许，返回false不允许',this.state.n)
//          if(nextState.n>3){
//              return false;
//          }
//         return true;

//     }
//     componentWillUpdate(){
//         //=>这里获取的状态也是更新之前的
//         console.log('6=组件更新之前')
//     }
//     componentDidUpdate(){
//         //=>这里获取的是更新之后
//         console.log('8=组件更新之后')
//     }
//     render(){
//         console.log('render')
//         return <div ref='hh'>
//         {this.state.n}
//         </div>
//     }
// }
// ReactDom.render(<A/>,document.getElementById('root'))

class A extends React.Component {
    constructor() {
        super();
        console.log('1=CONSTRUCTOR');
    }

    componentWillMount() {
        console.log('2=WILL-MOUNT：第一次渲染之前');
    }

    componentDidMount() {
        console.log('4=DID-MOUNT：第一次渲染之后', this.refs.HH);
    }

    componentWillReceiveProps(nextProps, nextState) {
        console.log('组件属性改变', this.props.n, nextProps.n);
        //=>属性改变也会触发子组件重新渲染，继续完成修改这套流程
    }

    shouldComponentUpdate() {
        console.log('SHOULD');
        return true;
    }

    render() {
        console.log('RENDER');
        return <div ref='HH'>
            {this.props.n}
        </div>;
    }
}

class B extends React.Component {
    constructor() {
        super();
        this.state = {
            n: 1
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                n: 2
            });
        }, 3000);
    }

    render() {
        //=>复合组件：组件嵌套（大组件嵌套小组件）
        return <div>
            {/*把父组件的状态信息作为属性传递给子组件*/}
            <A n={this.state.n}/>
        </div>;
    }
}

ReactDom.render(<B/>, document.getElementById('root'));
