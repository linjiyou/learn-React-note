import {combineReducers} from 'redux';
import vote from './vote';
import personal from './personal';

/** 
 * 合并reducer的时候，为了保证每一个板块管理的状态信息不冲突，在redux中指定的名称单独划分
 * 板块的状态
 * {
 *   vote:{
 * },
 *  xxx:{
 * //=>/一合并时候指定它的属性名为主，作为最后划分管理的名字
 *   
 *    
 * }
 *   }
 * 
*/



let reducer=combineReducers({
   vote:vote,
   xxx:personal
});
export default reducer;