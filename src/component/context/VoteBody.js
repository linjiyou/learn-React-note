import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';


export default class Vote extends React.Component{
    static contextTypes={
       n:propTypes.number,
       m:propTypes.number
    }
    constructor(props,context){
        super(props);
    
    }
    render(){
        console.log(this.context)
      let {n,m}=this.context,
          rate=(n/(n+m)*100);
          if(isNaN(rate)){
              rate=0;
          }

       return <div className={'panel-body'}>
            支持人数：<span >{n}</span>
            <br/>
            反对人数：<span >{m}</span>
            <br/>
            支持比率：<span>{rate.toFixed(2)}%</span>
            <br/>
       </div>
}
}