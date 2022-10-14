
import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, PRO_CREATE_FAIL, PRO_CREATE_SUCC, REQ_FAIL, REQ_SUCCESS, SINGLE_PRODUCT, SINGLE_PRODUCT_F_REUDX } from "./actionTypes";
import initialState, {  } from "./initialState";





// create Reducer
const productReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case PRODUCT_REQUEST :
            return {
                ...state,
                skileton : true
            }
        case PRODUCT_SUCCESS :
            return {
                ...state,
                skileton : false,
                products : payload,
                error : null
            }
        case PRODUCT_FAIL :
            return {
                ...state,
                skileton : false,
                error : payload
            }
        case PRODUCT_FAIL :
            return {
                ...state,
                skileton : false,
                error : payload
            }
        case SINGLE_PRODUCT :
            return {
                ...state,
                singleProduct : payload
            }

        // single data from previously loded redux data 
        case SINGLE_PRODUCT_F_REUDX :
            return {
                ...state,
                singleProduct : state.products.find(data => data._id === payload)  
            }

        case REQ_FAIL :
            return {
                ...state,
                reqSucc : false
            }
        case REQ_SUCCESS :
            return {
                ...state,
                reqSucc : true
            }

    
        default:
          return  state;
    }

}
export default productReducer;