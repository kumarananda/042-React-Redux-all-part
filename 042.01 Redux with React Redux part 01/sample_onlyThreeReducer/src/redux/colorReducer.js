


// initial state
const initialState = 'gray';

// create reducer
const colorReducer = (state = initialState, {type ,payload}) => {

    switch(type){
        case 'GRAY' :
            return 'gray';
        case 'RED' :
            return 'red';
        case 'GREEN' :
            return 'green';
        case 'BLUE' :
            return 'blue';
        case 'YELLOW' :
            return 'yellow';
            
        default :
            return state
    }
}

export default colorReducer;