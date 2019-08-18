import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import VoteHead from './VoteHead';
import VoteBody from './VoteBody';
import VoteFooter from './VoteFooter';
import propTypes from 'prop-types';

export default class Vote extends React.Component{
    static defaultProps={
        title:'林计友很帅',
         count:{
            n:0,
            m:0
        }
    };
   static childContextTypes={
       n:propTypes.number,
       m:propTypes.number
   };
   getChildContext(){
       let {count:{n=0,m=0}}=this.props;
       return {
           n,
           m
       }
   }
    constructor(props){
        super(props);
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
