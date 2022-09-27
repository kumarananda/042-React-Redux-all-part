import {applyMiddleware, createStore} from 'redux';
import rootReducer from './rootReducer';
import {composeWithDevTools } from 'redux-devtools-extension'
import checkMiddleware from '../middleware/checkMiddleware';


// create redux store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(checkMiddleware)));

// export redux store
export default store