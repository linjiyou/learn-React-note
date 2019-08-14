import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';


class Vote extends React.Component{
    static defaultProps={};
    static propTypes={
        title:propTypes.string.isRequired
    }
    constructor(props){
        super(props);
        //=>init state
        this.state={
            n:0,//=>支持人数
            m:0 //=>反对人数
        };
    }
    render(){
        let {n,m}=this.state;
        let rate=(n+m)===0?'0%':((n/(n+m)*100).toFixed(2)+'%');
        return <section className='panel panel-default' style={{width:'60%',margin:'20px auto'}}>
            <div className='panel-heading'>
                <h3 className='panel-title'>{this.props.title}</h3>
            </div>
            <div className='panel-body'>
            支持人数：<span ref={x=>this.spanLeft=x}>0</span>
            <br/>
            <br/>
            反对人数:<span ref={x=>this.spanRight=x}>0</span>
            <br/><br/>
            支持率：<span ref={x=>this.spanRate=x}>0%</span>
            </div>
            <div className='panel-footer'>
            <button className='btn btn-success' onClick={this.support}>支持</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btn btn-danger' onClick={this.against}>反对</button>
            </div>
        </section>
    }
    //=>投票：支持
    support=ev=>{
        /* 
         refs:是react中专门提供通过操作dom来实现需求的方式，它是以个对象，存储了当前组件所有设置
         ref属性的元素（元素属性值是啥，refs存储的元素属性名就是啥）
        */
    //   console.log(this.refs)
     let {spanLeft}=this.refs;
     this.spanLeft.innerHTML++;
     this.computed();
    }
    against=ev=>{
     let {spanRight}=this.refs;
     this.spanRight.innerHTML++;
     this.computed();
    };
    computed=()=>{
       let {spanLeft,spanRight,spanRate}=this.refs,
            n=parseFloat(this.spanLeft.innerHTML),
            m=parseFloat(this.spanRight.innerHTML),
            rate=(n+m)===0?'0%':((n/(n+m)*100).toFixed(2)+'%');
            this.spanRate.innerHTML=rate;
    }
}
ReactDom.render(
     <main> 
          <Vote title='世界杯小组赛法国vs秘鲁，法国队必胜！'></Vote>
          <Vote title='世界杯小组赛阿根廷vs克罗地亚，加油！！'></Vote>
    </main>
,document.getElementById('root'))