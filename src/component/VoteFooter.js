import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default class Vote extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       return <div className={'panel-footer'}>
           <button className={'btn btn-success'} >支持</button>
                        &nbsp;&nbsp;&nbsp;
            <button className={'btn btn-danger'} >反对</button>
       </div>
    }
}