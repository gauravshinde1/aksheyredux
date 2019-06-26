import { SET_CURRENT_USER } from '../types';

const intialState = {
    isAutheticated: false,
    user : {}
};

export default function (state = intialState, action){
    switch(action.type){
        case SET_CURRENT_USER:
        return {
            ...state,
            isAutheticated: true,
            user : "tushar new user"
        };

        default:
            return state;
    }
}