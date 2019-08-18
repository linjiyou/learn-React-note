react基础知识复习
   1.react是react是Facebook公司开发的一款mvc版的js框架
     mvc：Model(数据层)， View(视图层) , Controller(控制层)
     核心思想：通过数据的改变来影响视图的渲染（数据驱动）

   2.基于脚手架create-react-app 快速构建以个react工程项目结构
     自动安装react的核心组件：react/react-dom
     自动安装webpack，并且完成相关配置：
      -》区分了开发坏境和生产环境
      -》安装babel以及对应的语言解析包，可以把react和es6进行编译处理
      -》安装css/style/file等加载器，处理css等合并压缩的问题
      -》安装了很多插件，可以实现js和css以及html的分离，打包，压缩等
      -》安装了webpack-dev-server，可以在开发环境下，编译后自动插件服务，可以打开浏览器，当代码修改后，自动保存编译，页面自动刷新渲染等
      【使用脚手架】
      ```
      把脚手架安装在全局坏境，以后应用命令操作，完成项目的结构的搭建
       $ npm install create-react-app -g
       

       创建项目结构目录
       项目名遵循npm法爆命名规范：名字只能是 /^[a-z0-9_-]$/
       $ reate-react-app 项目名

    特点：如果当前电脑安装了yarn，创建工程目录的时候，走的是yarn安装，yarn和npm主体相同，但是处理起来还有一定的区别，所以我们以后继续向工程中安装模块以及执配置脚本打包编译的时候 ，尽可能使用yarn，不建议和npm混用

      ```

      【工程化目录】
      |- node_modules
      |   |-  .bin 所有在本地可执行的命令脚本（react-script.cmd)
      |   |-.........
      |  package.json /当前的项目配置清单
      |
      |- public 存放的是当前项目的html页面（有可能放一部分静态资源）
      |     |-index.html
      |     |-.....
      |
      | -src 存放的是项目需要的所有js或者是静态资源（包括组件，store，路由，数据模型，ajax请求等等内容“我们开发的内容基本上所有的东西都在src中写）
      |   |- index.html
      |   |-....
      |
      |
      |

  【暴露webpack配置项】
     脚手架构建项目的时候，为了结构的美化，我们把所有的wepback配置等都隐藏到了node_moudules中（react-scripts中），真实项目中，我们经常会基于脚手架构建的结构自己安装配置一些信息（例如：less处理的配置），此时我们需要把配置项暴露出来
        `$ yarn eject` 次操作是不可以逆转的（而且操作之前把需要把所有修改的文件提交到git仓库中）

        | -config
        |   |- webpack.config.dev.js 开发环境下的wp坏境
        |   |- webpack.config.prod.js 生产环境下的wp配置
        |   |- path.js 基本配置项（包含项目的入口信息） 
        |-scripts
        |  |-start.js/build.js/test.js 当我们执行yarn的时间就是这三个文件


    【可执行的本地脚本命令】
       $ yarn start  开发预览
         -》创建一个端口号为3000，协议为http的web服务
         -》按照webpack.config.dev.js把项目编译
         -》打开浏览器，预览我们正在开发的项目
         -》当项目文件修改的时候，自动重新编译，浏览页面自动刷新，展示最新的效果

        ```
          [window]
          $set HTTPS=true&&yarn start
          $set PORT=1234&&yarn start
          [mac/linux]
          $ HTTPS=true yarn start
          $ PORT=1245&&yarn start
          
        ```

        $ yarn build
        ->生成一个文件夹，存放最后打包的文件
        -》基于webpack.config.prods.js 把项目进行 编译打包
        -》 部署上线的时候，只需要把build中的内容发布即可

      【基于脚手架配置less】
       
       安装less和对应的加载器
        $ yarn add less-loader
        修改开发和生产环境下的webpack配置项
        ```
        [DEV:159~193行]
        {
            test: /\.(css|less)$/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    ...
                },
                ...
                {
                    loader: require.resolve('less-loader')
                },
            ],
        },
        ```
        [PROD:169~212行]
        {
            test: /\.(css|less)$/,
            loader: ExtractTextPlugin.extract(
                Object.assign(
                    {
                        fallback: {
                            loader: require.resolve('style-loader'),
                            options: {
                                hmr: false,
                            },
                        },
                        use: [
                            {
                                loader: require.resolve('css-loader'),
                               ...
                            },
                            ...
                            {
                                loader: require.resolve('less-loader'),
                            }
                        ],
                    },
                    extractTextPluginOptions
                )
            ),
        },
      ```
 ==============================
 REACT 基础知识复习（二）
  1.react是基于独有的jsx语法实现视图（数据和html）渲染

  2.jsx语法
    A:jsx语法渲染使用的是ReactDOM.render([jsx元素]，[指定的容器]，[回调函数：当我们把jsx放到指定容器呢，触发执行的函数]） 

    B： jsx=javascript +xml (html)
    ```
     1.不建议存放jsx的容器是body（写body会报错），一般都是使用自己创建的一个元素（例如：创建#root的div容器）

     2.不允许出现两个根元素，如果需要绑定复杂的结构，最外层嵌套一个容器作为根元素即可
     ReactDOM.render(<h2>珠峰培训</h2><h3>哈哈</h3>, root); =>错误的
     ReactDOM.render(<div>
         <h2>珠峰培训</h2>
         <h3>哈哈</h3>
     </div>, root); =>正确的

     3.把数据嵌入到jsx中（不是嵌入到元素的属性中，而是正常的内容中)
       let name='xxx';
      ReactDOM.render(<div>
          <h2>{name}</h2>
          <h3>{'哈哈'}</h3>
      </div>, root);
     =>不能嵌入对象（代指：{}，/^$/,日期对象，函数，或者数组中的某一项是也不行【简单的一维数组的数据是可以的】）
     ReactDOM.render(<div>
          <h2>{{name:'xxx'}}</h2>     NO
          <h3>{new Date()}</h3>       NO
          <h3>{[12,23,34]}</h3>       OK
          <h4>{(() => {
              return '呵呵';          OK:把自执行函数的结果嵌入进来
          })()}</h4>
      </div>, root);

      =》可以嵌入基本类型值（null/undefined/布尔值都是空元素，也就是不显示任何内容 ）
      =》大括号中可以嵌入js表达式（执行js代码需要有返回结果）
      循环创建的JSX元素需要设置标识KEY，并且在当前循环的时候，这个KEY需要唯一；而使用MAP是因为它有返回值，返回的是替换后的数组；
      ReactDOM.render(<ul>
          {
              data.map((item, index) => {
                  return <li key={index}>
                      {item.id}&nbsp;&nbsp;{item.title}
                  </li>;
              })
          }
      </ul>, root);
    使用三元运算符解决判断操作，（IF和SWITCH都不可以）
      ReactDOM.render(<ul>
          {name ? '哈哈' : '呵呵'}
      </ul>, root);

      4.可以给jsx设置属性
       =》属性值对应大括号中 对象，函数 （可以放js表达式）
       =》style属性值必须是对象（不能是字符串）
       =》class 用className代替
       =》...

    ```
      `jsx语法：jsx元素\react元素，react是如何把jsx元素转换为真实的dom元素并且添加页面中？`
       1.基于babel/babel-loader/babel-preset-react-app 把jsx语法编译为react
       .createElement
         =>createElement中至少两个参数，没有上限
         第一个：目前是当前元素标签名（字符串）
         第二个：属性（没有给元素设置属性则为null

        2.执行creact-elememt，把传递进来的参数最后处理成为一个对象
         {
             type:'标签名',
             props:{
               自己设置的那些对象（但是对于key，和ref来说是要提取处来的的），
               children：存放自己子元素的（没有子元素就没有这个属性），如果有多个子元素，就以数组的形式存储信息
             }，
             ref:null,
             kef:null

         }
     3.把生成的对象交给render进行处理，把对象编程dom元素，插到指定的容器中
  

   ====================
   真实项目中使用react都是基于组件或者模块开发的
      1.函数式创建组件
      2.基于类创建组件
     调取组件的时候：babel解析，传递给create-element的第一个参数不在是字符串标签名，而是一个函数（类），生成的对象中，type也是一个函数；当render渲染的时候会根据type的类型做不同的事情（如果是字符串就是创建最新元素，如果是函数，就会把函数执行，把返回的jsx对象创建成为新的元素进行渲染），函数执行的时候会把解析出来的对象中的props做为参数传递给组件（函数）
     ```
     function Vote(props){
      //=>props:调取组件传递过来的属性信息
         return <section>
         </section>
     }
        函数式组件声明特点:
        1.会把基于create-element解析出来的对象中的props做为参数传递给组件（可以完成多次调取组件传递不同的信息）
        2.一旦组件调取成功，返回的jsx就会渲染到页面上，但是后期不通过重新调取组件或者获取dom元素操作的方式，很难再把渲染好的组件中的内容更改=》函数式组件声明是“静态组件"
        基于类创建组件的特点
        1.调取组件相当于创建类的实例（this），把一些私有的属性挂载到实例上，这样组件内容所有方法中都可以基于实例获取这些值（包括：传递的属性和自己管理状态）
        2.有自己的状态管理，当状态改变的时候，react会重新渲染，（差异更新：基于dom-diff只把需要重新渲染的部分渲染即可）

        ref是react操作dom 
        1.给需要操作的元素设置ref（保持一致性，否则会冲突覆盖）
        2.在实例上挂载了refs属性，它是一个对象
     ```
=============
REACT基础知识复习（三）
 1.生命周期函数
    【调取组件】
    constructor
    componentWillMount  第一次渲染之前
    render 渲染
    componentDidMount  第一渲染之后
    
  【组件重新渲染：内部状态改变，或者传递给组件的属性改变】
       状态改变：
        shouldComponentUpdate
        =>是否允许组件更新：返回true是允许，返回false则不再继续向下走
        componentWillUpdate
        =>更新之前：和should一样，方法中通过this.state.xxx获取的还是更新前的状态信息，方法有两个参数：nextProps/nextState存储的是最新的属性和状态信息
        render
        componentDidUpdate  更新之后
        componentWillReceiveProps(nextProps/nextState)
         =>接受最新属性之前，基于this.props.xxx获取的是原有的属性信息，nextProps存储的是最新传递过来的属性信息
           shouldComponentUpdate
        =>是否允许组件更新：返回true是允许，返回false则不再继续向下走
        componentWillUpdate
        =>更新之前：
        render 更新
        componentDidUpdate  更新之后

   【组件销毁】
    componentWillUnmount 组件销毁之前
     
     组件的属性是只读的：只能调取时候传递进来，不能自己在组件内部修改（但是可以设置默认值和规则）
     组件的状态是可读写的：状态改变会引发组件的重新更新（状态是基于setState改变）
     组件实例上可以放一些信息：这些信息只是为方便在组件内任意方法中获取和使用的

     实例上挂载的refs：就是用来操作dom的

     实例上挂载的context：是用来传递组件信息传递













