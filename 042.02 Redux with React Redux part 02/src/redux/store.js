import {applyMiddleware, createStore} from 'redux';
import rootReducer from './rootReducer';
import {composeWithDevTools } from 'redux-devtools-extension'
import checkMiddleware from '../middleware/checkMiddleware';
import testMiddleware from '../middleware/testMiddleware';
import thunkMidleware from 'redux-thunk'


// create redux store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMidleware, checkMiddleware, testMiddleware)));

// export redux store
export default store