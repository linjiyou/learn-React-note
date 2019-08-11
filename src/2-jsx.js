/**
 * 、create-element:创建jsx对象
 * 参数：至少两个type/props,children这个部分可能没有可能有多个
 *
 */
function createElement(type,props,...children){
  let ref,key;
  console.log(props)
  'key' in props ? (key = props.key, props.key = undefined) : null;
  'ref' in props ? (ref = props.ref, props.ref = undefined) : null;
  return {
      type,
      props:{
          ...props,
          children:children.length<=1 
      },
      ref,
      key
  }
}
console.log(createElement("div", {
    id: "name"
  }, "\u6797\u8BA1\u53CB", ))