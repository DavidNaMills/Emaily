import {FETCH_USER} from '../actions/types';

const initialState = null;
export default (state=initialState, action)=>{
    switch(action.type){
        case FETCH_USER:
            return action.payload  || false; //user model
        default:
            return state;
    }
}