import { GET_ALL_PRODUCT } from "./actionTypes"



// make KUMRA
export const getAllProduct = (payload) => {
    return {
        type : GET_ALL_PRODUCT,
        payload : payload
    }
}



