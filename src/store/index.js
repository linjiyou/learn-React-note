

import {createStore} from 'redux';
import reducer from './reducer'; //<=>'reducer/index'

let store =createStore(reducer);
export default store;