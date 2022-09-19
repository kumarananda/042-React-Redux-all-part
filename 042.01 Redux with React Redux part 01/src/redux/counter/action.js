import { DECREMENT, INCREMENT } from "./actionTypes"


// make INCREMENT
export const makeIncrement = (payload) => {
    return {
        type : INCREMENT
    }
}

// make DECREMENT
export const makeDecrement = (payload) => {
    return {
        type : DECREMENT
    }
}

