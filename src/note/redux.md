[redux] 进行状态统一管理的类库（使用于任何技术体系的项目）

     1.只要两个或者多个组件之间想要实现信息的共享，都可以基于redux解决，把共享的信息存储到redux容器中进行管理
     2。还可以使用redux做临时存储：页面加载的时候，把从服务器获取的数据信息存储到redux中，组件渲染需要的数据，从redux中获取，这样只要页面刷新，路由切换的时候，再次渲染组件不需要重新从服务器拉取数据，直接从redux中获取即可，页面刷新，从头开始！(这套方案代替了localStorage本地存储来实现数据缓存)

    store=createStore(reducer) :存储的是哥哥组件的状态信息

   vote {
        n:0,    ==>            发布订阅事件池  
        m                  当容器中的状态改变，通知事件池中的方法依次执行
    }

    subscribe是把方法增加到事件池中，增加的方法一般都是：从新容器中获取最新的状态信息，然后重新渲染组件
    ```
     store.subscribe(()=>{

     })

     store.dispatch(()=>{
         //=>通过派发任务，告知reducer执行需要把state和action传递进去。reducer执行，把容器中的状态改变
     })


     store.getState //=>获取redux容器中的状态信息
  
    ```

     reducer函数：修改容器状态信息的管理员
        参数：state：原有状态，action：派发任务












        =====================

react-redux 是把redux进一步封装，适配react项目，让redux操作更简洁
   store文件夹中的内容和redux一摸一样
   在组件调取使用的时候可以优化一些步骤

   1.Provider 根组件
     当前整个项目都在Provide组件下，作用就是把创建的store可以供内部任何后代组件使用（基于上下文完成的）
     把创建的store基于属性传递给Provider（这样后代组件中都可以使用这个storel了）
   2.connect 高阶组件
     相对于传统的redux我们做的步骤优化
      1.导出的不在是我们创建的组件，而是基于connect构造后的高阶组件；
      export default connect ([mapStateToProps],[mapDispatchToProps])([自己创建的组件])
     [mapStateToProps]:把redux容器中的状态信息遍历，赋值给当前组件的属性
     [mapDispatchToProps]：把redux中的dispatch派发行为遍历，也赋值给组件的属性（state）：redux容器中的状态信息
    2.react-redux帮我们做了一件非常重要的事情：以前我们需要自己基于subscribe向事件池追加方法，已达到容器状态信息改变，执行我们追加的方法，重新渲染组件的目的，但是现在不用了，react-redux帮我们做了这件事：“所有用到redux容器状态信息的组件，都会向事件池追加一个方法，当状态信息改变，通知方法执行，，把最新的状态信息作为属性传递给组件，组件的属性值改变了，组件也会重新渲染。
     3.export default connect(state=>({...state.vote}),action.vote) (VoteBase);
     //=>react-redux帮我们做了一件事，把action-creator中编写的方法（返回action对象的方法），自动构建diapatch派发任务的方法，也就是mapDispatchToProps这种格式








  