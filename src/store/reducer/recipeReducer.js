
import {GET_RECIPE } from '../types';

const intialState = {
    recipe:{}
};

export default function (state = intialState, action){
    switch(action.type){
        case GET_RECIPE:
        return {
            ...state,
            recipe:action.payload
        };

        default:
            return state;
    }
}