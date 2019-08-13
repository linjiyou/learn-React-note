
###es6

```
class Parent{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    //=>Parent.prototype
    render(){
       //=>this.render(); 
    }
    //=>把parent当做一个普通的对象，设置的私有属性方法，和实例没有关系
    static ajax(){
        Parent.ajax();
    }
}
Parent.prototype.AA=12;//=>es6创建的类的大括号只能写方法（而且不能是箭头函数），不能设置属性，属性需要自己额外设置
Parent.BB=12;//=>把它作为对象设置属性也不行，在外面可以。里面不行
```
=============
```
class Children extents Parent{
    constructor(){
       super();//=>Parent.constructor.call(this)
    }
    render(){

    }
}
```
