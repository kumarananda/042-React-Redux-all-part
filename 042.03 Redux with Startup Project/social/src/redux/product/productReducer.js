import { GET_ALL_PRODUCT } from "./actionTypes"
import initialState, {  } from "./initialState"





// create Reducer
const productReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_ALL_PRODUCT:
            return 'ff'


    
        default:
          return  state;
    }

}
export default productReducer;