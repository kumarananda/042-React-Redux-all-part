import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes"


// product request
export  const productRequest = () => ({ 
    type : PRODUCT_REQUEST 
})

// product request
export  const productSuccess = (payload) => ({ 
    type : PRODUCT_SUCCESS,
    payload
})

// product request
export  const productFail = (payload) => ({ 
    type : PRODUCT_FAIL,
    payload
})