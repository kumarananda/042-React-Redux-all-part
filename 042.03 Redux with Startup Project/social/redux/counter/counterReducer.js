import { DECREMENT, INCREMENT } from "./actionTypes";
import { initialCounterState } from "./initialState";




// counter reducer
const counterReducer = (state = initialCounterState, {type, payload}) => {

    switch(type){
        case INCREMENT :
            return state + 1;

        case DECREMENT :
            return state - 1;

        default : 
            return state
    }

}


export default counterReducer;

