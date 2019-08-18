import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';
import './static/css/reset.min.css';
import './static/css/index.css';
import  Banner from './component/Banner-1';
let imgData=[];
for(let i=1;i<=5;i++){
   imgData.push({
       id:i,
       title:'',
       pic:require(`./static/images/${i}.jpg`)
   })
}
ReactDOM.render(<main>
   
   <ReactSwipe className={'container'} swipeOptions={{
     auto:2000
   }}>
         {imgData.map((item,index)=>{
           let {pic,title}=item;
           return <div key={index}>
             <img src={pic} alt={title}/>
           </div>
         })}
   </ReactSwipe>
</main>,document.getElementById('root'))