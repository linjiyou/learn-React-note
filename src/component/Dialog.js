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
    let {con,lx=0}=props;
     let  title=lx===0?'系统':'linjiyou';
    return <section>
        <h2>{title}</h2>
        <div>{con}</div> 
    </section>
}