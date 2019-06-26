import axios from "axios";
import {GET_RECIPE} from "./../types"


export const getReducer = () => dispatch => {
    axios.get("https://www.food2fork.com/api/search?key=fe640f1f8e5deda725e60315f4b524a5")
    .then(res => dispatch({
        type:GET_RECIPE,
        payload:res.data
    }))
    .catch(err =>console.log(err) )   
}