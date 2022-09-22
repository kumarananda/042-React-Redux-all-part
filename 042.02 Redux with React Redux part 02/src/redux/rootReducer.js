import { combineReducers } from "redux";
import colorReducer from "./color/colorReducer";
import counterReducer from "./counter/counterReducer";
import foodReducer from "./food/foodReducer";





// create root reducer
const rootReducer = combineReducers({
    counter : counterReducer,
    color : colorReducer,
    food : foodReducer
});


// export rootReducer
export default rootReducer;
