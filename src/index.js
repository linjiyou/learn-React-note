import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';
import Banner from'./component/Banner';
import './static/css/reset.min.css';
import  {Vote} from './component/Vote';


ReactDOM.render(
    <section>
        <Vote title={'德国对战墨西哥,德国必胜'}/>
         <Vote title={'沈醉很英俊'}></Vote>
    </section>

    ,document.getElementById('root'))