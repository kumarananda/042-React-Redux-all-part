import { combineReducers } from "redux";
import colorReducer from "./color/colorReducer";
import counterReducer from "./counter/counterReducer";
import devsReducer from "./devs/devsReducer";
import foodReducer from "./food/foodReducer";





// create root reducer
const rootReducer = combineReducers({
    counter : counterReducer,
    color : colorReducer,
    food : foodReducer,
    devs : devsReducer
});


// export rootReducer
export default rootReducer;
