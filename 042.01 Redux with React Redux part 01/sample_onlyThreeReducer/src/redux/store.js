import {createStore} from 'redux';
import rootReducer from './rootReducer';


// create redux store
export const store = createStore(rootReducer);

// export redux store
export default store