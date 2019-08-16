import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';
import Banner from'./component/Banner';
import './static/css/reset.min.css';



// let name='lin';
// ReactDOM.render(<ul id={'box'} onClick={}>
//     {
//         name?'he':null
//     }
//  </ul>,document.getElementById('root'))

 let createElement=(type,props,...childrens)=>{
    //=>ref&&key
     props=props||{};
    let key=null,
        ref=null;
        if('ref' in props){
            ref=props['ref'];
            props['ref']=undefined;
        }
        if('key' in props){
            key=props['key'];
            props['key']=undefined;
        }
        // 'ref' in props?(ref=props['ref'],props['ref']=undefined):null;
        // 'key' in props?(key=props['key'],props['key']=undefined):null;
    return{
       type,
       props:{
           ...props,
           //=>保证children是一项或者是数组多项
           children:childrens.length<=1?(childrens[0]||''):childrens
       } ,
        key,
        ref,
       $$typeof:Symbol(React.element),
       _owner:null,
       _store:{
           validataed:false
       },
       _self:null,
       _source:null

    }
}
let objJSx=createElement("div", {
    id: "name",
    style: {
        color: 'red'
      }
  }, "\u6797\u8BA1\u53CB", createElement("span", null),createElement("p", null))

  //=>rende>
  let render=(objJSx,container,callBack)=>{
     let {type,props}=objJSx,
         {children}=props,
         newElement=document.createElement(type);
         for(let attr in props){
             let valueJsx=props[attr]
             if(!props.hasOwnProperty(attr))break;
             if( typeof valueJsx ==='undefined'){
                 valueJsx='';
             };
             //=>特殊属性处理
             //=>事件属性
             let regEvent=/^on/;
             if(regEvent.test(attr)){
              newElement.addEventListener(attr.toLowerCase().substr(2), valueJsx.bind(undefined),false);
              continue;   
             }
             switch (attr.toUpperCase()){
                 case 'CLASSNANE':
                 newElement.setAttribute('id',valueJsx);
                 break;
                 case 'STYLE':
                     for(let styAttr in valueJsx){
                         newElement.style[styAttr]=valueJsx[styAttr];
                     }
                     break;
                case 'CHILDREN' :
                    if(!(valueJsx instanceof Array)) {valueJsx=[valueJsx]}; 
                    valueJsx.forEach((item,index)=>{
                       if(typeof item==='string'){
                        newElement.appendChild(document.createTextNode(item))
                           return;
                       } 
                       render(item,newElement);//=>递归调用
                    })
                     break;
                 default:
                     newElement.setAttribute(attr,valueJsx);
             }
            

         }
         container.appendChild(newElement);
         callBack&&callBack();
  }
  render(objJSx,document.getElementById('root'));
// {type: "div", props: {…}, key: null, ref: null, $$typeof: Symbol(), …}
// $$typeof: Symbol()
// key: null
// props:
// children: (3) ["林计友", {…}, {…}]
// id: "name"
// style: {color: "red"}
// __proto__: Object
// ref: null
// type: "div"
// _owner: null
// _self: null
// _source: null
// _store: {validataed: false}
// __proto__: Object