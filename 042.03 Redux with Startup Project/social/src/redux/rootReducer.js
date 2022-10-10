import { combineReducers } from "redux";
import productReducer from "./product/productReducer";




// create root reducer
const rootReducer = combineReducers({
    product : productReducer
});


// export rootReducer
export default rootReducer;
