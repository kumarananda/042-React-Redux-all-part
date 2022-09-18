import {createStore} from 'redux';

// initial state
const initialState = 1;


// counter reducer
const counterReducer = (state = initialState, {type, payload}) => {

    switch(type){
        case "INCREMENT" :
            return state + 1;

        case "DECREMENT" :
            return state - 1;

        default : 
            return state
    }

}

// create redux store
export const store = createStore(counterReducer);