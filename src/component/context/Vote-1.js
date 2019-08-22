import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import VoteHead from './VoteHead';
import VoteBody from './VoteBody';
import VoteFooter from './VoteFooter';
import PropTypes from 'prop-types';

export default class Vote extends React.Component{
    static defaultProps={
        title:'林计友很帅',
         count:{
            n:0,
            m:0
        }
    };
   static childContextTypes={
       n:PropTypes.number,
       m:PropTypes.number,
       callBack:PropTypes.func
   };
   getChildContext(){
       let {n,m}=this.state;
       return {
           n,
           m,
           callBack:this.updateContext
       }
   };
   updateContext=(type)=>{
       //=>type:support/against
       if(type==='support'){
           this.setState({
               n:this.state.n+1
           })
       }
       this.setState({
           m:this.state.m+1
       })
   }
    constructor(props){
        super(props);
        //=>init state
        let {count:{n=0,m=0}}=this.props;
        this.state={n,m};

    }
    render(){
        let {title,count}=this.props;
       return <section className={'panel panel-default'}style={{width:'50%',
       margin:'20px auto'}}>
           <VoteHead title={title}/>
           <VoteBody count={count}/>
           <VoteFooter/>
        </section>;
    }
}
