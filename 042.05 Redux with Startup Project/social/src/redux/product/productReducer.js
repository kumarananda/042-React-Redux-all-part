
import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes";
import initialState, {  } from "./initialState"





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
                products : payload
            }
        case PRODUCT_FAIL :
            return {
                ...state,
                skileton : false,
                error : payload
            }


    
        default:
          return  state;
    }

}
export default productReducer;