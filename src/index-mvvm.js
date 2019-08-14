import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';

class Temp extends React.Component{
    constructor(){
        super();
        this.state={
         name:'linjiyou'
        };
    };
    componentDidMount(){
        setTimeout(()=>{
        this.setState({name:'lll'})
        },1000)
    }
  
    render(){
        return <section className='panel panel-dafault'>
          <div className='panel-heading'>
              <input type='text' className='form-control' value={this.state.name} 
               onChange={(ev)=>{
                   //=>在文本框的on-chane中修改状态信息：实现的是视图改变数据
                   this.setState({
                       name:ev.target.value
                   })
               }}
               />
          </div>
          <div className='panel-body'>{this.state.name} 
          </div>
        </section>
    }
}

ReactDom.render(<Temp>

</Temp>,document.getElementById('root'))