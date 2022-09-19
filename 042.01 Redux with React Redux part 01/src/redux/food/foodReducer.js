import { ALU, KUMRA, LAU, POTOL } from "./actionTypes"
import { initialFoodState } from "./initialState"





// create Reducer
const foodReducer = (state = initialFoodState, {type, payload}) => {

    switch (type) {
        case KUMRA:
            return 'kumra'
        case POTOL:
            return 'potol'
        case ALU:
            return 'alu'
        case LAU:
            return 'lau'

    
        default:
          return  state;
    }

}
export default foodReducer;