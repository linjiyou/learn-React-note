/* 
 *1.创建一个对象（默认有四个属性值：TYPE/PROPS/REF/KEFY），最后把这个对象返回
 *
 * 2.根据传递的值修改对象
 *  TYPE=>传递的TYPE
 *  PROPS 需要做一些处理：大部分PROPS中的属性都赋值给对象PROPS，有一些比较特殊
 * ->如果是KEY或者是REF，我们需要把传递的PROPS中的这两个属性值，给创建对象的两个属性，而传递的
 * PROPS中的这两个值删除掉
 * ->把传递的CHILDREN做为新创建对象PROPS中的一个属性
 *
 * 
 */

 function createElement(type, props, ...children) {
    props = props || {};
    //=>创建一个对象，设置一些默认属性值
    let obj = {
        type: null,
        props: {children: ''},
        ref: null,
        key: null
    };
    //=>用传递的TYPE和PROPS覆盖原有的默认值
    // obj = {...obj, type, props};//=>{type:type,props:props}
    obj = {...obj, type, props: {...props, children}};
    //=>把REF和KEY提取出来(并且删除PROPS中的属性)
    'key' in obj.props ? (obj.key = obj.props.key, obj.props.key = undefined) : null;
    'ref' in obj.props ? (obj.ref = obj.props.ref, obj.props.ref = undefined) : null;
     console.log(obj.key,obj.ref)
    return obj;
}
let objJXS=createElement('h1',{id:'titleBox',classNmae:'title',style: {color:'red'},ref:'AA',key:'12'},
 '\u73E0\u5CF0\u57F9\u8BAD')
// console.log(encodeURIComponent('林计友'));
/* 
 *
 { type: 'h1',
  props:
   { id: 'titleBox',
     classNmae: 'title',
     style: { color: 'red' },
     ref: undefined,
     key: undefined,
     children: '%E6%9E%97%E8%AE%A1%E5%8F%8B' },
  ref: 'AA',
  key: '12' }
 *
 * render:把创建的对象生成对应的dom元素中
 * 
 */
 function render(objJXS,Container,callBack){
     console.log(Container)
         let {type,props}=objJXS||{};
         newElement=document.createElement(type); 
         for(let attr in props){
             if(!props.hasOwnProperty(attr)) break;//不是私有的直接结束遍历
             if(!props[attr]) continue;//=>如果当前属性没有值，直接不处理即可
             let value=props[attr];
             if(attr==='className'){
                 newElement.setAttribute('class',value)
             }
             if(attr==='style'){
                 if(value==='')continue;
                 for(let styKey in value){
                    if(value.hasOwnProperty(styKey)){
                        newElement['style'][styKey]=value[styKey]; 
                    }
                         
                     
                 }
                 continue;
             }
             //=>childern
              if(attr==='children'){
                  if(typeof value ==='string'){
                      //=>创建文本节点（对象）
                      let text=document.createTextNode(value);
                      newElement.appendChild(text);
                      
                  }
                  continue;
             }
             //=>基于set-attribute可以设置的属性表现在html的解构上
             newElement.setAttribute(attr,value);

         }
         Container.appendChild(newElement);
         callBack&&callBack();
 }
 render(objJXS,root,()=>{
        console.log('ok')
 });