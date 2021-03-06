import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import VoteHead from './VoteHead';
import VoteBody from './VoteBody';
import VoteFooter from './VoteFooter';
import PropTypes from 'prop-types';

export default class Vote extends React.Component{
    // static defaultProps={
    //     title:'林计友很帅',
    //      count:{
    //         n:0,
    //         m:0
    //     }
    // };
   
    constructor(props){
        super(props);
         
    }
    render(){
        let {store}=this.props;
      
       return <section className={'panel panel-default'}style={{width:'50%',
       margin:'20px auto'}}>
           <VoteHead />
           <VoteBody store={store} />
           <VoteFooter store={store}/>
        </section>;
    }
}
