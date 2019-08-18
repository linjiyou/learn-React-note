import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';
import './static/css/reset.min.css';
import Vote from './component/Vote-1';



// export default class Vote extends React.Component{
//     constructor(props){
//         super(prosp);
//     }
//     render(){
//        return <section>

//         </section>
//     }
// }
ReactDOM.render(
  <main>
    {/* title:标题 count：初始支持反对人数 */}
    <Vote title={'英格兰对战巴拿马，’韩丽凯隐必胜！'} count={{
      n:100,
      m:78
    }}/>
  </main>
,document.getElementById('root'))
