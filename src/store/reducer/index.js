
import {combineReducers} from 'redux'
import vote from './Vote';
import personal from './personal';


let reducer=combineReducers({
    vote,
    personal

});
export default reducer;