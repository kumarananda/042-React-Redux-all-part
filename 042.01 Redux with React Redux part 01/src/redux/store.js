import {createStore} from 'redux';
import rootReducer from './rootReducer';
import {composeWithDevTools } from 'redux-devtools-extension'


// create redux store
export const store = createStore(rootReducer, composeWithDevTools());

// export redux store
export default store