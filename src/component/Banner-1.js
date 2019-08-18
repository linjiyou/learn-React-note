import React from 'react';
import PropTypes from 'prop-types';
import '../static/css/banner.css'; 

export default class Banner extends React.Component{
    //=>组件的属性不可更改但是可以设置默认值
    static defaultProps={
       data:[],
       interval:3000,
       step:1,
       speed:300,
       style:{}

    }
    constructor(props){
        super(props);
        // 初始化状态
        let {step,speed}=this.props;
        this.state={
            step,
            speed
        }
    }
    componentWillMount(){
        // 可以实现数据克隆
        let {data}=this.props,
           cloneDate=data.slice(0);
           cloneDate.push(data[0]);
           cloneDate.unshift(data[data.length-1]);
           this.cloneDate=cloneDate;
    }
    componentDidMount(){
        // 开启自动轮播
        
        this.autoTimer=setInterval(this.moveRight,this.props.interval);
          
    }
    componentWillUpdate(nextProps,nextState){
        // /边界判断：如果当前最新修改的step值以及大于最大索引，说明不能继续向右走了
        // 我们应该让其“立即”（无动画）回到真实第一张（step=1）
        if(nextState.step>(this.cloneDate.length-1)){
            this.setState({
                step:1,
                speed:0
            });
        }
// 向左边界判断：如果当前最新索引已经小于零，说明不能继续向左走了，我们让
// 其回到“倒数第二张图片位置（真实图片的最后一张图片）step=cloneData.length-2”
     if(nextState.step<0){
         this.setState({
             step:this.cloneDate.length-2,
             speed:0
         });
     }
    }
    componentDidUpdate(){
        // 向右边界判断：立即回到第一张，我们应该让其运动到真实的第二张
        let {step,speed}=this.state;
        if(step===1&&speed===0){
        let delayTimer=  setTimeout(()=>{
           clearTimeout(delayTimer)
                this.setState({
                    step:step+1,
                    speed:this.props.speed
                })
            },0)
           
        }
        // 向左边界判断：立即回到“倒数第二张”后，我们应该让其向左在运动一张
        if(step===this.cloneDate.length-2&&speed===0){
            let delayTimer=setTimeout(()=>{
                clearTimeout(delayTimer);
                this.setState({
                    step:step-1,
                    speed:this.props.speed
                })
            })
        }
       
    }
    render(){
        let {data,style}=this.props,
            {cloneDate}=this;
        if(data.length===0)return '';
        // 计算wrapper样式
        let {step,speed}=this.state;
        let wrapperStyle={
            width:`${cloneDate.length*1000}px`,
            transform:`translateX(${-step*1000}px)`,
            transition:`transform ${speed}ms`
        }
        return <section className={'container'} 
        onMouseEnter={this.movePause}
        onMouseLeave={this.movePlay} 
        onClick={this.handleClick}>
          <ul className={'wrapper'} style={wrapperStyle} onTransitionEnd={()=>{
            //  当wrapper切换完成，再去执行下一个动画
             this.isRun=false;
              }}>
                  {cloneDate.map((item,index)=>{
                      let {pic,title}=item;

                      return <li key={index} >
                          <img src={pic} title={title}/>
                      </li>
                  })}
          </ul>
          <ul className={'focus'}>
              {data.map((item,index)=>{
   //   焦点对齐：图片索引减去一就是焦点选中项对应的索引（特殊的：如果图片索引是零，
 //让最后一个焦点选中，如果图片索引是最大，让第一个焦点选中）
                    let tempIndex=step-1;
                    if(step===0){
                        tempIndex=data.length-1
                    }   
                    if(step===cloneDate.length-1){
                        tempIndex=0
                    }
                  return <li key={index} className={tempIndex===index?'active':''} ></li>
              })}
          </ul>
          <a href='javascript:;' className={'arrow arrowLeft'}></a>
          <a href='javascript:;' className={'arrow arrowRight'}></a>
        </section>
    }
    // 向右切换：自动轮播或者点击切换
    moveRight=()=>{
     
     this.setState({
         step:this.state.step+1
     })
    }
    // =>自动轮播的暂停和开启
    movePause=()=>clearInterval(this.autoTimer);
    movePlay=()=>this.autoTimer=setInterval(this.moveRight,this.props.interval);
    // 事件委托
    handleClick=ev=>{
     let target=ev.target,
         tarTag=target.tagName,
         tarClass=target.className;
        //左右切换
        if(tarTag='A'&& /(^| +)arrow( +|$)/.test(tarClass)){
            //=>Right
            // 防止过快点击
            if(this.isRun)return;
            this.isRun=true;
            if(tarClass.indexOf('arrowRight')>0){
                this.moveRight();
                return;
            }
            // =>Left
              this.setState({
                  step:this.state.step-1
              })
             return;
        }
    }
}
