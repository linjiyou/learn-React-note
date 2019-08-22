import React from 'react';
import {connect} from 'react-redux';
import action from '../../store-1/action';

 class VoteHandle extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {support,against}=this.props;
        return <div className='panel-footer'>
        <button className='btn btn-success' onClick={()=>{
            // this.props.store.dispatch(action.vote.support());   
                support();
        }
            
    }>支持</button>
        &nbsp;  &nbsp;  &nbsp;
        <button className='btn btn-danger' onClick={()=>{
        //    this.props.store.dispatch(action.vote.against()) ;
          against();
        }
           
        }>反对</button>
        </div>
    }
}

export default connect(state=>({...state.vote}),action.vote)(VoteHandle)
