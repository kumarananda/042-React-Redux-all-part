

// initaila state
const initialState = '';


// create Reducer
const foodReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case 'RED':
            return ''

    
        default:
          return  state;
    }

}
export default foodReducer;