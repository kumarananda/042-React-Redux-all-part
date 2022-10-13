import axios from "axios"
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

// get all product
export const getAllProduct = () => async (dispatch) => {
    
    try{
        dispatch(productRequest())
        await axios.get('http://localhost:5050/api/v1/product')
        .then(res => {
          dispatch(productSuccess(res.data))
        })
        .catch(error =>  dispatch(productFail(error.message))
        )

    }catch(error){
        dispatch(productFail(error.message))
    }
    

}

// create product
export const createProduct = (data) => async (dispatch) => {
    
    try{
        
        await axios.post('http://localhost:5050/api/v1/product', data)
        .then(res => {
          dispatch(getAllProduct())
        })
        .catch(error => dispatch(productFail(error.message)) )

    }catch(error){

        dispatch(productFail(error.message))
    }
    

}