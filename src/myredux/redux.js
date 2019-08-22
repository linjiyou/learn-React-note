
/**
 * createStore:创建redux容器
 * @param
 *   reducer:函数
 *  @return
 *    store:{
 *        getState,
 *        dispatch,
 *        subscribe    
 * }
 *
 */
  function createStore(reducer){
      //=>创建一个store，state用来存储管理的状态信息，listen-ary用来存储事件池的方法
      //=>state不用设置初始值，因为第一次dispatch执行reducer，state没有值，走的是reducer
      //=>中赋值的默认值信息 ，我们会在创建容器的时候就把dispatch执行一次！
       let state,
           listenAry=[];
      //=>基于dispatch实现任务派发
       function dispatch(action){
        //=>1.执行reducer，修改容器中的状态信息(接受reducer的返回值，把返回的信息
        // 替换原有的state)，值得注意的是：我们是把返回值全部替换state，所有要求reduce
        // 中在修改状态之前，要先把原始的状态信息克隆一份，在进行单个的属性修改
       state=reducer(state,action)
        // 2.通知事件池中的方法执行
        for(let i=0;i<listenAry.length;i++){
            let item=listenAry[i];
            if(typeof item==='function'){
                item();
            }else{
                listenAry.splice(i,1);
                i--;
            }
        }
       }

    //=>创建容器的时候执行一次dispatch，目的是把reducer中的默认状态信息赋值给redux
    //=>容器中的状态   
       dispatch({type:'INIT-DAFAULT-STATE'});

       //=>get-state:
       function getState(){
           //=>1.我们需要保证返回的状态信息不能喝容器中的state是同一neicun
           return JSON.parse(JSON.stringify(state));//=>深度克隆
       }

       //=>subscribe
       function subscribe(){
        // 去重
           let isExit=listenAry.includes(fn)
           if(!isExit){
            listenAry.push(fn);
           };
        
            return function unsubscribe(){
                let index=listenAry.indexOf(fn);
                // listenAry.splice(index,1); //可能会引发数组塌陷 
                listenAry[index]=null;
            }
       }
       return{
           dispatch,
           getState,
           subscribe
       }
  };
  
  let reducer=(state={},action)=>{
      //=>state：原有状态信息
      //=>action:派发任务时候传递的行为对象
      switch(action.type){
        //=>根据type执行不同的state修改操作
      }
     return state;  //=>返回的state会替换原有的state

  };
  let store=createStore(reducer);
        //=>create的时候把reducer传递过来，但是此时reducer
       //=>并没有执行呢，只有dispatch的时候才执行，通知reducer，通知执行reducer修改容器中的状态；
    //  store.dispatch({type:'xxxxx'})

//    let unsubscribe=store.subscribe(fn);
//         unsubscribe()




/**
 *  combineReducers:redcuer合并
 *     @param
 *          对象，对象中包含了每一个板块对象reducer{xxx:function reducer,redcuer}
 *     @returns
 *       返回的是一个新的reducer函数（把这个值赋值给create-store）
 *    特殊处理：合并reducer之后， redux容器也变为以对应对象管理的模式=》
 *    {xxx:{}...}
 */    
function combineReducers(redcuers){
     //=>reducers:传递进来的reducers对象集合

       return function redcuer( ={},action){
    //=>dispatch派发执行的时候，执行的是返回的reducer，这里也要返回一个最终的state对象
       let newState={};
           for(let key in redcuers){
               if(!redcuers.hasOwnProperty(key)) break;
            newState= redcuers[key](state[key],action);
           }
       return newState;
       }
}

store=createStore(reducer);
 store.dispatch({type:'xxx'});

















