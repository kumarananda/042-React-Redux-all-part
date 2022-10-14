import axios from "axios"
import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, REQ_FAIL, REQ_SUCCESS, SINGLE_PRODUCT, SINGLE_PRODUCT_F_REUDX } from "./actionTypes"
import swal from "sweetalert"


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
// product REQ_SUCCESS
export  const req_success = () => ({ 
    type : REQ_SUCCESS
})
// product REQ_FAIL
export  const req_fail = () => ({ 
    type : REQ_FAIL
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

// single data from previously loded redux data 
export const getSingleProduFromRedux =   (id) => ({ 
    type : SINGLE_PRODUCT_F_REUDX,
    payload : id
})

// single product request //pattern >> data fron server 
export  const singleProduct = (payload) => ({ 
    type : SINGLE_PRODUCT,
    payload
})

// get all product
export const getSingleProduct = (id) => async (dispatch) => {
    
    try{
        
        await axios.get(`http://localhost:5050/api/v1/product/${id}`)
        .then(res => {
            dispatch(singleProduct(res.data)) //pattern >> data fron server 

        })
        .catch(error =>  dispatch(productFail(error.message))
        )

    }catch(error){
        dispatch(productFail(error.message))
    }
    

}

// create product
export const createProduct = (data,e, setInput) => async (dispatch) => {
    
    try{
        console.log(data);
        await axios.post('http://localhost:5050/api/v1/product', data)
        .then(res => {
        // req_success()
        dispatch(getAllProduct())
        swal('Successfull', 'Product Created')
        e.target.reset()
        setInput({
            name : '', 
            reg_price: '', 
            sale_price: '', 
            stock: '',
            photo: '', 

        })

          
        })
        .catch(error => dispatch(() => {
            req_fail()
            productFail(error.message)
            
        }) )

    }catch(error){

        // dispatch(productFail(error.message))
        dispatch(() => {
            req_fail()
            productFail(error.message)
            
        })
    }
    

}


