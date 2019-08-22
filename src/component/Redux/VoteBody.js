import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';


export default class Vote extends React.Component{
    
    constructor(props,context){
        super(props);
        this.state={
            refresh:0
        }
    
    }
    componentDidMount(){
        this.props.myRedux.subscribe(()=>{
         this.setState({
             refresh:this.state.refresh+1
         })
        })
    }
    render(){
        
    //   let {n,m}=this.context,
    //       rate=(n/(n+m)*100);
    //       if(isNaN(rate)){
    //           rate=0;
    //       }
      let state=this.props.myRedux.getState(),
         {n=0,m=0}=state,
         rate=(n/(n+m))*100;
         if(isNaN(rate)){
             rate=0
         }
       return <div className={'panel-body'}>
            支持人数：<span >{n}</span>
            <br/>
            反对人数：<span >{m}</span>
            <br/>
            支持比率：<span>{rate.toFixed(2)+'%'}</span>
            <br/>
       </div>
}
}