
import { DELETE_PRODUCT, FORM_RESET, PRODUCTED_ADDED, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, PRO_CREATE_FAIL, PRO_CREATE_SUCC, REQ_FAIL, REQ_SUCCESS, SINGLE_PRODUCT, SINGLE_PRODUCT_F_REUDX } from "./actionTypes";
import initialState, {  } from "./initialState";





// create Reducer
const productReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case PRODUCT_REQUEST :
            return {
                ...state,
                skeleton : true
            }
        case PRODUCT_SUCCESS :
            return {
                ...state,
                skeleton : false,
                products : payload,
                error : null
            }
        case PRODUCT_FAIL :
            return {
                ...state,
                skeleton : false,
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
        // case PRODUCTED_CREATED :
        //     return {
        //         ...state,
        //         products : state.products.find(data => data._id === payload)  
        //     }
        case DELETE_PRODUCT :
            return {
                ...state,
                products : state.products.filter(data => data._id !== payload)  
            }
        case PRODUCTED_ADDED :
            return {
                ...state,
                products : [...state.products, payload ]  
            }

        // case FORM_RESET :
        //     return {
        //         ...state,
        //         reset : payload
        //     }


    
        default:
          return  state;
    }

}
export default productReducer;