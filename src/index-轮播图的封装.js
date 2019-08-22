import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';
import Banner from'./component/Banner';
import './static/css/reset.min.css';


/** #region
 * data :轮播图需要绑定的数据
 *  interval：自动轮播的时间
 *  step：默认图片展示的索引
 *  speed： 每一张图片运动的时间
 * 
*/
/*  */
//#region
//  let imgData=[{
//     id:1,
//     title:'',
//     pic:require('./static/images/1.jpg')
// }, {
//     id:2,
//     title:'',
//     pic:'./static/images/2.jpg'
// }, {
//     id:3,
//     title:'',
//     pic:'./static/images/3.jpg'
// }, {
//     id:4,
//     title:'',
//     pic:'./static/images/4.jpg'
// }, {
//     id:5,
//     title:'',
//     pic:'./static/images/5.jpg'
// }
// ];
// #endregion

 let imgData=[];
 for(let i=1;i<=5;i++){
    imgData.push({
        id:i,
        title:'',
        pic:require(`./static/images/${i}.jpg`)
    })
 }
ReactDOM.render(<main>
    <Banner data={imgData} interval={3000} step={1} speed={300}/>
    <div style={{margin:'20px auto'}}></div>
    <Banner data={imgData} interval={3000} step={3} speed={300}/>
    <div style={{margin:'20px auto'}}></div>
   
</main>,document.getElementById('root'));