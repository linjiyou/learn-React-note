import React from 'react';
import ReactDOM,{render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';
import './static/css/reset.min.css';
import {createStore} from 'redux';
import VoteBase from './component-1/vote/VoteBase';
import VoteHandle from './component-1/vote/VoteHandle';
import store from './store-1';
import {Provider,connect} from 'react-redux';



render(
    <Provider store={store}>
     <section className='panel panel-default' style={{width:'50%',margin:'20px auto'}}>
     <VoteBase store={store}/>
     <VoteHandle store={store}/>
    </section>
    </Provider>
    ,document.getElementById('root'))
