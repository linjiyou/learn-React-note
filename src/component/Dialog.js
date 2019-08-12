/**
 * 
 *函数式声明组件
   1.函数返回结果是一个新的jsx（ 也就是当前组件的jsx结构）
   2.props变量存储的值是一个对象，包含了调取组件时候传递的属性值
 *  （不传递是空对象）
 * @export
 */
// 每个组件中都要导入react，因为需要基于create-element把jsx解析
import React from 'react';
export default function Dialog(props){
    //=>children:可能有可能没有，可能只是一个值，也可能是一个数组，可能每一项是一个字符串
    //=>也可能是对象
    let {con,lx=0,children}=props;
     let  title=lx===0?'系统':'linjiyou';
    return <section>
        <h2>{title}</h2>
        <div>{con}</div> 
        {/* 把属性中传递的子元素存放到组件中指定位置 */}
        {children}
        //React.Children遍历
        {React.Children.map(children,item=>item)}
    </section>
}