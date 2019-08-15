import React from 'react';
import PropTypes from 'prop-types';
import '../static/css/banner.css';


export default class Banner extends React.Component{
    static defaultProps={
     data:[],
     interval:3000,
     step:1,
     speed:300
    };
    static propTypes={
        data:PropTypes.array,
        interval:PropTypes.number,
        step:PropTypes.number,
        speed:PropTypes.number
    };

    constructor(props){
      super(props);
      //=>init state
      let {step,speed}=this.props;
      this.state={
          step: step,
          speed:speed
      }
    }
    //=>数据的克隆
    componentWillMount(){
        let {data}=this.props;
        let cloneData=data.slice(0);
        cloneData.push(data[0]);
        cloneData.unshift(data[data.length-1]);
        this.cloneData=cloneData;//=>挂载到实例上供其他方法调用
    } 
    //=>控制自动轮播
    componentDidMount(){
    //=>把定时器挂载到实例上，方便后期清除：结束自动轮播
    this.autoTimer=setInterval(()=>{
          this.autoMove();
     },this.props.interval);
    }
    componentWillUpdate(nextProps,nextState){
          //=>边界判断：如果最新修改的step索引大于最大索引（说明此时已经末尾了，
           //    不能往后走了），我们立即回到（无动画）索引为1的位置
           if(nextState.step>(this.cloneData.length-1)){
               this.setState({
                   step:1,
                   speed:0
               });
               
           }
    }
    componentDidUpdate(){
        //=>只有克隆第一张立即切换到真实的第一张，我们才做如下处理：
         //让其从当前第一张运动到第二张即可
         let {step,speed}=this.state;
         if(step===1&&speed===0){
        // =>设置定时器：css的transition有一个问题（主栈执行的时候，短时间内遇到
        // 两次设置的transition-drration的代码，以最后一次设置为主）
             let delayTimer=setTimeout(()=>{
                
                  this.setState({
                    step:step+1,
                    speed:this.props.speed
                    
                })
                clearTimeout(delayTimer)
             },0)
         }
    }
  render(){
      let {data}=this.props,
          {cloneData}=this;
          if(data.length===0) return '';

          //=>控制wrapper的样式
          let {step,speed}=this.state;
          let wrapperSty={
             left:-step*1000+'px',
             transition:`left ${speed}ms linear 0ms`,
             width:cloneData.length*1000+'px',
          };
      return <section className='container'>
      <ul className='wrapper' style={wrapperSty}>
        {cloneData.map((item,index)=>{
            let {title,pic}=item;
            return <li key={index}>
                <img src={pic} alt={title}/>
            </li>
        })}
      </ul>
      <ul className='focus'>
         {data.map((item,index)=>{
             let tempIndex=step-1;
             if(step===0){
                 tempIndex=data.length-1
             }
             if(step===cloneData.length-1){
                 tempIndex=0;
             }
             return <li key={index} className={tempIndex===index?'active':''}></li>
         })}
      </ul>
      <a href='javascript:;' className='arrow arrowLeft'></a>
      <a href='javascript:;' className='arrow arrowRight'></a>
      </section>;
  }
  //=>向右切换
  autoMove=()=>{
    this.setState({
        step:this.state.step+1
    });
  }
}
/**  
 *wrapper的宽度取决于：展示图片的数量
 *轮播图切换其实就是控制wrapper的left值变化，切换到哪一张，就更改对应的left值即可
 *   left：-索引*1000 
 * 无缝衔接：
 *   把真实的一张克隆到末尾，
 *   真实的最后的一张克隆到开始位置
 *   三张真实：5个li
 * 焦点对齐  *************************
 *  图片索引 0   1    2    3    4     *
 *          三  一   二   三    一    *
 *             *     *     *    *    *
 *            *      *     *    *    *
 *           *       *     *    *    *
 *   焦点索引 0       1     2********
 *            *******************                       
 * 
 * 
 * 
*/