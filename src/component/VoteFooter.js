import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import action from '../store/action';



export default class Vote extends React.Component{
  
    constructor(props){
        super(props);
    }
    render(){
       
       return <div className={'panel-footer'}>
           <button className={'btn btn-success'}onClick={()=>{
              this.props.store.dispatch(action.vote.support())
           }}>支持</button>
                        &nbsp;&nbsp;&nbsp;
            <button className={'btn btn-danger'} onClick={()=>{
                 this.props.store.dispatch(action.vote.against())
            }} >反对</button>
       </div>
    }
}