
import * as TYPE from '../action-types';
let vote={
    support(){
     //=>dispatch派发的时候需要传递啥就返回啥即可
        return{
          type:TYPE.VOTE_SUPPORT
        };
    },
     against(){

        return {
          type:TYPE.VOTE_AGAINST
        }
    }
};
export default vote;