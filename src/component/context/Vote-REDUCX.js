import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import VoteHead from './VoteHead';
import VoteBody from './VoteBody';
import VoteFooter from './VoteFooter';
import PropTypes from 'prop-types';

export default class Vote extends React.Component{
   
    constructor(props){
        super(props);
       
    }
    render(){
      
       return <section className={'panel panel-default'}style={{width:'50%',
       margin:'20px auto'}}>
           <VoteHead/>
           <VoteBody/>
           <VoteFooter/>
        </section>;
    }
}
