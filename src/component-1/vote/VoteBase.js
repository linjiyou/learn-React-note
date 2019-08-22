import React from 'react';
import action from '../../store-1/action';
import {connect} from 'react-redux';

 class VoteBase extends React.Component{
//     constructor(props){
//         super(props);
//      let reduxState=this.props.store.getState().vote;
//      this.state={
//          ...reduxState //=>包含title/n/m
//      }  

//     };
//     // =>在第一次加载执行，通过行为派发（vote_init)把redux中的信息赋值初始值,
//     //=>
//     componentWillMount(){
        
//    this.props.store.dispatch(action.vote.init({
//     title:'redux是魔鬼',
//     n:0,
//     m:10
 
// }));
//   let reduxState=this.props.store.getState().vote;
//   this.setState({
//       ...reduxState
//   })
//     };
//     //=>向发布订阅事件池中追加一个方法：

//     componentDidMount(){
//         this.props.store.subscribe(()=>{
//             let {n,m}=this.props.store.getState().vote;
      
//             this.setState({
//                n,
//                m
//             })
//         })
       
//     }
     constructor(props){
         super(props);
         console.log(this.props)
     }
   componentWillMount(){
    this.props.init({
        title:'red',
        n:0,
        m:10
    })
}
    render(){
          let {title,n,m}=this.props;
        return <div>
            <div className='panel-heading'>
                <h3 className='panel-title'>{title}</h3>
            </div>
            <div className='panel-body'>
              支持人数：<span>{n}</span>
              <br/><br/>
              反对人数：<span>{m}</span>
              </div>
        </div>
    }
}

// let mapStateToProps=(state)=>{

//    return{
//     ...state.vote
//    }
// };
// let mapDispatchToProps=(dispatch)=>{

//     return {

//       init(initData){
//         dispatch(action.vote.init(initData));
//       }
//     }
// };
// export default connect(mapStateToProps,mapDispatchToProps) (VoteBase);
export default connect(state=>({...state.vote}),action.vote) (VoteBase);
//=>