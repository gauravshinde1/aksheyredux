import {SET_CURRENT_USER} from "./../types"


export const setUser = () => dispatch => {
    dispatch({
        type:SET_CURRENT_USER,  
    })
} 
