import { initialDevState } from "./initialState";


// create devReducer 
const devsReducer = (state = initialDevState, { type, payload }) => {
    switch (type) {
        case 'DEVS_ADDED':
            return {
                ...state,
                devs: payload
            }
    
        default:
            return state;
    }

}
export default devsReducer;