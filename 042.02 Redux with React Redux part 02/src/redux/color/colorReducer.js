import { BLUE, GRAY, GREEN, RED, YELLOW } from "./actionTypes";
import { initialColorState } from "./initialState";




// create reducer
const colorReducer = (state = initialColorState, {type ,payload}) => {

    switch(type){
        case GRAY :
            return 'gray';
        case RED :
            return 'red';
        case GREEN :
            return 'green';
        case BLUE :
            return 'blue';
        case YELLOW :
            return 'yellow';
            
        default :
            return state
    }
}

export default colorReducer;